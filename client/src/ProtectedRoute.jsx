import { useAuth } from "./contexto/AuthContext"
import {Navigate, Outlet} from 'react-router-dom'

export default function ProtectedRoute() {
   const {user, isAuthenticated} = useAuth();

   if(!isAuthenticated) return <Navigate to='login' replace/>
   

    return <Outlet/>
}
