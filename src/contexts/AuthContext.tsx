import { UserInfo } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../services/firebase'


type User = UserInfo | undefined

export interface AuthContext {
    user: User,
    functions: {
        LoginWithGoogle: () => void,
        LoginWithFacebook: () => void,
        CreateAccount: (email: string, password: string) => void,
        Login: (email: string, password: string) => Promise<boolean>,
        Logout: () => void
    }
}

const AuthContext = createContext<AuthContext>({} as AuthContext)


export const AuthContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const LoginWithGoogle = () => {
        signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
            setUser(result.user)
            navigate("/")
        }).catch((error) => {
            console.error(error.errorMessage)
        })
    }

    const LoginWithFacebook = () => {
        signInWithPopup(auth, new FacebookAuthProvider()).then(result => {
            setUser(result.user)
            navigate("/")
        }).catch(error => {
            console.error(error.errorMessage)
        })
    }

    const CreateAccount = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            setUser(result.user)
            navigate("/")
        }).catch(err => {
            console.error(err.errorMessage)
        })
    }

    const Login = async (email: string, password: string): Promise<boolean> => {
        try {
            let result = await signInWithEmailAndPassword(auth, email, password)
            if (result.user) {
                setUser(result.user)
                return true
            } else {
                return false
            }
        } catch (err: any) {
            throw new Error(err)
        }
    }

    const Logout = () => {
        auth.signOut().then(result => {
            setUser(undefined)
            navigate("/")
        }).catch(err => {
            console.error(err.errorMessage)
        })
    }



    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <AuthContext.Provider value={{ user, functions: { LoginWithGoogle, LoginWithFacebook, CreateAccount, Login, Logout } }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}