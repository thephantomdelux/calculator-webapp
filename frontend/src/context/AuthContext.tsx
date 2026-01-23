/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { getProfile, logout } from "../api/auth-api";

type User = {
    _id : string,
    username : string
}; 

type AuthContextType ={
    user : User | null;
    loading : boolean,
    logoutUser : () => Promise<void>
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    getProfile()
    .then((res) => setUser(res.data.user))
    .catch(() => setUser(null))
    .finally(() => setLoading(false));
}
,[]);

    const logoutUser = async () => {
        await logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, loading, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)!;
