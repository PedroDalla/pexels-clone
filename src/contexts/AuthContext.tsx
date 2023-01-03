import { UserInfo } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../services/firebase'
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { ref, get, set } from "firebase/database";
import { IUser } from "../interfaces";


type User = IUser

export interface AuthContext {
    user: User | undefined,
    functions: {
        LoginWithGoogle: () => void,
        LoginWithFacebook: () => void,
        CreateAccount: (email: string, password: string) => void,
        Login: (email: string, password: string) => Promise<void>,
        Logout: () => void
    }
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

const baseUserObject: {
    gallery: string[],
    collections: string[],
    followers: string[],
    following: string[],
    views: 0,
    totalFollowers: 0,
    totalFollowing: 0,
} = {
    gallery: [],
    collections: [],
    followers: [],
    following: [],
    views: 0,
    totalFollowers: 0,
    totalFollowing: 0,

}


export const AuthContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const createUser = async (userInfo: UserInfo) => {
        let reference = ref(db, `users/${userInfo.uid}`)
        try {
            const { displayName, email, phoneNumber, photoURL, uid } = userInfo
            const newUserObject = { displayName, email, phoneNumber, photoURL, uid, ...baseUserObject }
            await set(reference, newUserObject)
            setUser(newUserObject)
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const handleLogin = async (userInfo: UserInfo) => {
        let reference = ref(db, `users/${userInfo.uid}`)
        try {
            const result = await get(reference)
            const parsed = result.val()
            if (parsed) {
                setUser(parsed)
            } else {
                await createUser(userInfo)
            }
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const LoginWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.error(error)
        })
    }

    const LoginWithFacebook = () => {
        signInWithPopup(auth, new FacebookAuthProvider()).catch(error => {
            console.error(error.errorMessage)
        })
    }

    const CreateAccount = async (email: string, password: string): Promise<boolean> => {
        try {
            let result = await createUserWithEmailAndPassword(auth, email, password)
            if (result.user) {
                try {
                    await createUser(result.user)
                } catch (err: any) {
                    throw new Error(err)
                }
                return true
            } else {
                return false
            }
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const Login = async (email: string, password: string): Promise<void> => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const Logout = () => {
        auth.signOut().then(() => {
            navigate("/")
        }).catch(err => {
            console.error(err.errorMessage)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    await handleLogin(user)
                    navigate("/")
                } catch (err: any) {
                    throw new Error(err)
                }
            } else {
                setUser(undefined)
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user, functions: { LoginWithGoogle, LoginWithFacebook, CreateAccount, Login, Logout } }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}