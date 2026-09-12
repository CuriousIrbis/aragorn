import { NavLink } from 'react-router-dom';
import links from '../../constants/Links';
import type ILink from '../../types/TLinks';

export default function Links(){
    return (
        <section className='flex flex-row justify-between w-full'>
            {links.map((link: ILink, index: number) => {
                if(index <= 0) return;
                return (
                    <NavLink to={link.address} className='border border-dark-hacki w-full p-8 duration-300 group hover:bg-bg-browney flex flex-col gap-3'>
                        <p className='text-green'>0{index}</p>
                        <h3 className='font-bold group-hover:text-orange duration-250 group-hover:scale-120 origin-left'>{link.name}</h3>
                        <p className='text-dark-hacki text-[12px]'>{link.description}</p>
                    </NavLink>
                )
            })}
        </section>
    )
}