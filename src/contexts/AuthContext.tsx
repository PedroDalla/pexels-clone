import { Unsubscribe, UserInfo } from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, get, set, onValue } from "firebase/database";
import { IUser } from "../interfaces";

type User = IUser;

export interface AuthContext {
  user: User | undefined;
  functions: {
    LoginWithGoogle: () => void;
    LoginWithFacebook: () => void;
    CreateAccount: (
      email: string,
      password: string,
      name: string,
      lastName?: string
    ) => void;
    Login: (email: string, password: string) => Promise<void>;
    Logout: () => void;
  };
}

const AuthContext = createContext<AuthContext>({} as AuthContext);

const baseUserObject: {
  gallery: { uid: string }[];
  collections: { uid: string }[];
  followers: string[];
  following: string[];
  views: 0;
  likes: { [key: string]: boolean };
  totalFollowers: 0;
  totalFollowing: 0;
} = {
  gallery: [],
  collections: [],
  followers: [],
  following: [],
  views: 0,
  likes: {},
  totalFollowers: 0,
  totalFollowing: 0,
};

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  const createUser = async (
    userInfo: UserInfo,
    name?: string,
    lastName?: string
  ) => {
    let reference = ref(db, `users/${userInfo.uid}`);
    try {
      let { displayName, email, phoneNumber, photoURL, uid } = userInfo;
      if (name) {
        if (lastName) {
          displayName = name + " " + lastName;
        } else {
          displayName = name;
        }
      }
      const newUserObject = {
        displayName,
        email,
        phoneNumber,
        photoURL,
        uid,
        ...baseUserObject,
      };
      await set(reference, newUserObject);
      setUser(newUserObject);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const handleLogin = (userInfo: UserInfo, onError: (err: Error) => void) => {
    let reference = ref(db, `users/${userInfo.uid}`);
    return onValue(
      reference,
      (result) => {
        const parsed = result.val();
        if (parsed) {
          setUser(parsed);
        } else {
          createUser(userInfo);
        }
      },
      (err) => onError(err)
    );
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      console.error(error);
    });
  };

  const LoginWithFacebook = () => {
    signInWithPopup(auth, new FacebookAuthProvider()).catch((error) => {
      console.error(error.errorMessage);
    });
  };

  const CreateAccount = async (
    email: string,
    password: string,
    name: string,
    lastName?: string
  ): Promise<boolean> => {
    try {
      let result = await createUserWithEmailAndPassword(auth, email, password);
      if (result.user) {
        try {
          await createUser(result.user, name, lastName);
        } catch (err: any) {
          throw new Error(err);
        }
        return true;
      } else {
        return false;
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const Login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      throw new Error(err);
    }
  };

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err.errorMessage);
      });
  };

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        unsubscribe = handleLogin(user, (err) => {
          navigate("/");
          throw new Error(err.message);
        });
      } else {
        setUser(undefined);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        functions: {
          LoginWithGoogle,
          LoginWithFacebook,
          CreateAccount,
          Login,
          Logout,
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
