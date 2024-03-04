// <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>

import React, { createContext } from 'react';
// context API
export AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authinfo ={

    }
    return (
        <AuthContext.Provider value = {authinfo}></AuthContext.Provider>
    );
};

export default AuthProvider;