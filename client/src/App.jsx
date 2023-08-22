import { BrowserRouter, Route, Routes } from "react-router-dom";

import {AuthProvider} from './contexto/AuthContext.jsx'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard.jsx'
import ProjectFormPage from './pages/ProjectFormPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import {ProjectProvider} from './contexto/ProjectContext.jsx'
import NavBar from './components/NavBar.jsx'
import './styles/app.css'


function App() {
  return (
    <AuthProvider>
    <ProjectProvider>
      <BrowserRouter>
      <main className="containerMain">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/project/:id" element={<ProjectPage/>}/>

        
        <Route element={<ProtectedRoute/>}>
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/add-project" element={<ProjectFormPage/>} />
        </Route>
      </Routes>
      </main>
    </BrowserRouter>
    </ProjectProvider>
    </AuthProvider>
  );
}

export default App;
