import {createContext, useState,useEffect, useContext} from 'react';
import {registerRequest, loginRequest} from '../api/auth.js'
import Cookie from 'js-cookie'

export const AuthContext = createContext();

export const useAuth =()=>{
   const context = useContext(AuthContext);
   if(!context){
    throw new Error("useAuth must be used within an AuthProvider")
   }
   return context;
}

export const AuthProvider = ({children})=>{
const [user, setUser] = useState(null);
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [errors,setError] = useState([]);


    const signup = async (user) =>{
        try{
        const res = await registerRequest(user)
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
        }catch(error){
            setError(error.response.data)
            console.log(error.response.data)
            }
    };

    const signin = async (user)=>{
        try{
            const res = await loginRequest(user);
            console.log(res.data)
            setIsAuthenticated(true)
            setUser(res.data)
        }catch(error){
            if(Array.isArray(error.response.data)){
                return setError(error.response.data)
            }
            setErrors([error.response.data.message])
        }} 

    useEffect(()=>{
        if(errors.length > 0 ){
            const timer = setTimeout(()=>{
                setError([])
            },5000)
            return ()=> clearTimeout(timer)
        }
    }, [errors])

    useEffect(()=>{
        const cookies = Cookie.get()
        if(cookies.token){
            console.log(cookies.token)
        }
        console.log(Cookie)
    },[])


    return(
        <AuthContext.Provider 
        value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}