import { Link } from "react-router-dom";

const links = {
    HOME: '/',
    WORK: '/work',
    ADMIN: '/admin'
} as const;

export default function Header(){
    return(
        <header>
            <Link to={links.HOME}>Домой</Link>
            <Link to={links.WORK}>Для работодателей</Link>
            <Link to={links.ADMIN}>Для админа</Link>
        </header>
    )
}