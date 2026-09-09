import { Link } from 'react-router-dom';

import type ILink from '../types/TLinks';
import links from '../constants/Links';

// import styles from '../styles/header.component.scss';

export default function Header(){
    return (
        <header>
            <Link to='/'>Aragorn</Link>

            <nav>
                {links.map((link: ILink, index: number) => (
                    <Link to={link.address} key={index}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}