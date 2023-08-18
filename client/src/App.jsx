import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {AuthProvider} from './contexto/AuthContext.jsx'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/project" element={<h1>project page</h1>} />
        <Route path="/add-project" element={<h1>add-project</h1>} />
        <Route path="/project/:id" element={<h1>Update project</h1>} />
        <Route path="/dashboard" element={<h1>dashboard</h1>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
