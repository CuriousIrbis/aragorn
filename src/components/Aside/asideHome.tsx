import styles from './aside.module.scss';

export default function Aside(){
    return (
        <aside className={styles.asideMeny}>
            <nav className={styles.asideNav}>
                <a href="/" className={styles.aside}>Наверх</a>
                <a href="#about" className={styles.aside}>Обо мне</a>
                <a href="#interests" className={styles.aside}>Инетересы</a>
            </nav>
        </aside>
    )
}