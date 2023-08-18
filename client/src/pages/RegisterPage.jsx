import { useForm } from 'react-hook-form'
import { useAuth } from '../contexto/AuthContext'
import './pagesStyle/registerPage.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: {errors}} = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigation = useNavigate();


    useEffect(() => {
        if (isAuthenticated) navigation('/dashboard')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });


    return (
        <div>
            {RegisterErrors.map((error, i)=>(<div key={i}>{error}</div>))}

            <form onSubmit={onSubmit} className='formRegister'>
                <input placeholder='New username' type="text"
                    {...register('username', { required: true })} />
                    { errors.username && <p>Falta el nombre de usuario</p>}
                <input placeholder='new email' type="email"
                    {...register('email', { required: true })} />
                    { errors.email && <p>Falta el Email</p>}
                <input placeholder='new password' type="password"
                    {...register('password', { required: true })} />
                    { errors.password && <p>Falta la contra</p>}
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage