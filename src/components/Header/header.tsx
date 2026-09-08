import { Link } from "react-router-dom";
import styles from './header.module.scss';

const links = {
    HOME: '/',
    WORK: '/work',
    ADMIN: '/admin'
} as const;

export default function Header(){
    return(
        <header className={styles.header}>
            <Link to={links.HOME} className={styles.link}>Домой</Link>
            <Link to={links.WORK} className={styles.link}>Для работодателей</Link>
            <Link to={links.ADMIN} className={styles.link}>Для админа</Link>
        </header>
    )
}