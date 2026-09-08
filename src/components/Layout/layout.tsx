import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

import styles from './layout.module.scss';
import Aside from '../Aside/asideHome';

export default function Layout(){
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Aside />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
            
        </div>
    )
}