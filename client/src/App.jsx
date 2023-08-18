import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import {AuthProvider} from './contexto/AuthContext.jsx'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard.jsx'
import ProjectFormPage from './pages/ProjectFormPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/project/:id" element={<ProjectFormPage/>}/>

        
        <Route element={<ProtectedRoute/>}>
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/add-project" element={<ProjectFormPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
