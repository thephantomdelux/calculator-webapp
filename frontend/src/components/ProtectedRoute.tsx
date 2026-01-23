import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

const ProtectedRouter = ({children} : {children: JSX.Element}) => {
    const {user, loading} = useAuth();

    if (loading) return <p>Loading .... </p>;
    if (user) return <Navigate to="/login"/>;
    return children;
}

export default ProtectedRouter;