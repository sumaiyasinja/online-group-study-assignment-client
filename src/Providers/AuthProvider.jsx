// <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>

import  { createContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

// context API
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const GoogleProvider = new GoogleAuthProvider()
    const LogInWithGoogle = () =>{
        return signInWithPopup(auth, GoogleProvider)
    }
    const authinfo ={
        LogInWithGoogle,
    }
    return (
        <AuthContext.Provider value = {authinfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;