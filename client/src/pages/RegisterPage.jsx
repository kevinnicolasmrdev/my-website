import { useForm } from 'react-hook-form'
import {useAuth} from '../contexto/AuthContext'

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const {signup, user} = useAuth();

    console.log(user)

    const onSubmit = handleSubmit( async (values) => {
        signup(values);
    });
    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder='New username' type="text"
                    {...register('username', { required: true })} />
                <input placeholder='new email' type="email"
                    {...register('email', { required: true })} />
                <input placeholder='new password' type="password"
                    {...register('password', { required: true })} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage