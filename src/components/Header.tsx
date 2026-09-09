import { NavLink } from 'react-router-dom';

import type ILink from '../types/TLinks';
import links from '../constants/Links';

import styles from '../styles/header.module.scss';

export default function Header(){
    return (
        <header>
            <NavLink to='/' className={styles.homeLink}>Aragorn</NavLink>

            <nav>
                {links.map((link: ILink, index: number) => (
                    <NavLink 
                        to={link.address} 
                        key={index}
                        className={({isActive}) => 
                            isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}