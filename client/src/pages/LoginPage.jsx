import { useForm } from "react-hook-form";
import "./pagesStyle/registerPage.css";
import { useAuth } from "../contexto/AuthContext";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuthenticated) navigate('/dashboard');
  },[isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div>
      {loginErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}

      <form onSubmit={onSubmit} className="formRegister">
        <h3>Ingrese sus datos de usuario</h3>
        <input
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Falta el Email</p>}

        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p>Falta la contra</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
