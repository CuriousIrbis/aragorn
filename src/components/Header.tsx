import { NavLink } from 'react-router-dom';

import type ILink from '../types/TLinks';
import links from '../constants/Links';

// import styles from '../styles/header.module.scss';

export default function Header(){
    return (
        <header className=' flex items-center justify-between py-5 px-17.5 fixed w-full bg-bg-main/80 border-b-[.4px] border-dark-hacki backdrop-blur-[20px]'>
            <NavLink to='/' className='text-[22px] font-bold font-barlow hover:text-orange'>Aragorn</NavLink>

            <nav className='flex flex-row gap-7.5'>
                {links.map((link: ILink, index: number) => (
                    <NavLink 
                        to={link.address} 
                        key={index}
                        className='text-dark-hacki hover:text-beige [.active]:text-orange'
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}