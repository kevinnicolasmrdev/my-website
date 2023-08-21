import { useAuth } from "./contexto/AuthContext"
import {Navigate, Outlet} from 'react-router-dom'
import LoadingComponent from './components/LoadingComponent.jsx'

export default function ProtectedRoute() {
   const {loading, isAuthenticated} = useAuth();


   if(loading) return (<LoadingComponent/>)
   if(!loading && !isAuthenticated) return <Navigate to='login' replace/>
   

    return <Outlet/>
}
