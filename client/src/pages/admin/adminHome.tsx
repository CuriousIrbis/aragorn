import styles from './admin.module.scss';
import checkAdmin from '../../security/isAdmin';
import { useForm, type SubmitHandler } from 'react-hook-form';
import useAdminStore from '../../store/adminLogged';

interface IFormInput{
    id: string
    admin: string
    password: string
}

export default function AdminHome(){
    const {isLogged, setIsLogged} = useAdminStore();
    const {register, handleSubmit} = useForm<IFormInput>();

    const submitEvent: SubmitHandler<IFormInput> = (data) => {
        const status: boolean = checkAdmin(data);

        if(status){
            setIsLogged(status)
            alert('Status - ok')
        } else {
            alert('Status - bad')
        }
    }

    return(
        <div className={styles.adminLayout}>
            {isLogged ? (
                <div>
                    <h2>Войден</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit(submitEvent)}>
                    <label>Имя: </label>
                    <input 
                        type="text" 
                        {...register('admin')}
                    />
                    <label>Пароль...</label>
                    <input 
                        type="password" 
                        {...register('password')}
                    />
                    <input type="submit" />
                </form>
            )}
        </div>
    )
}