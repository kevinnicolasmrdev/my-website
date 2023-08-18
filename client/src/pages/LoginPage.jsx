import {useForm} from 'react-hook-form'
import './pagesStyle/registerPage.css'
import { useAuth } from '../contexto/AuthContext';


function LoginPage() {
  const {
    register,
    handleSubmit,
    formState:{errors}
    } = useForm();
    const {signin, errors: loginErrors} = useAuth();
  
  const onSubmit = handleSubmit(data=>{
    signin(data)
  })
  
  return (
    <div>
    {loginErrors.map((error, i)=>(<div key={i}>{error}</div>))}

      <form onSubmit={onSubmit} className='formRegister'>
        <input placeholder='new email' type="email"
          {...register('email', { required: true })} />
        {errors.email && <p>Falta el Email</p>}

        <input placeholder='new password' type="password"
          {...register('password', { required: true })} />
        {errors.password && <p>Falta la contra</p>}

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage