/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth-api";
import { useAuth } from "../context/AuthContext";


const Signup = () => {
    // storing input values using useState
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError]  = useState("");

// redirecting page after login
const navigate = useNavigate();
const {user} = useAuth();

// during Form submit
const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault() // prevent from page reloading

// clearing the error and set loading true
    setError("");
    setLoading(true);

// Send username and password to the backend
    try {
        await signup({username, password});
        // when success
        navigate("/login");
        // when error
    } catch (err : unknown){
        setError("Username already exists or invalid data");
    } finally {
        setLoading(false);
    }
};
// if user already logged in
if (user) {
    navigate("/");
    return null;
}

return (
    <div style={{width: "400px", margin:"50px auto"}}>
        <h2>Sign up</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div> 
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? "Creating Account ..." :"Signup"}
            </button>
        </form>
    </div>
)


}

export default Signup;