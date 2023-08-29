import { createContext, useState, useEffect, useContext } from "react";
import {
    registerRequest,
    loginRequest,
    verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setError] = useState([]);
    const [loading, setLoading] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setError(error.response.data);
            console.log(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setIsAuthenticated(true);
            setUser(res.data);
            console.log(res.data)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                console.log("Hubo un error")
                return setError(error.response.data);

            }
            setErrors([error.response.data.message]);
            console.log("Hubo un error 2")

        }
    };

    const logout =()=> {
        Cookies.remove('token');
        setIsAuthenticated(false)
        setUser(null)
    }


    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setError([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);




    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null);
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);

            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
                errors,
                loading,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
