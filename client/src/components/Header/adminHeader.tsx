import { Link } from "react-router-dom";
import styles from './adminHeader.module.scss'
import useAdminStore from "../../store/adminLogged";

const links = {
    HOME: '/'
} as const;

export default function AdminHeader(){
    const {setIsLogged} = useAdminStore();
    
    const onComingBack = () => {
        alert('Прощайте')
        setIsLogged(false)
    }

    return (
        <header className={styles.header}>
            <h2>Админская панель</h2>
            <Link 
                to={links.HOME}
                onClick={onComingBack}
            >Для смертных</Link>
        </header>
    )
}