import { Link } from 'react-router';
import '/src/style/layout/header.scss'

import Icon from './../../assets/img/png/leopard.png'

function Header(){
    return(
        <header>
            <img src={Icon} alt="" />
            <nav>
                <Link to='/' state={{title: 'Дом'}}>Домой</Link>
                <Link to='/about' state={{title: 'Знакомство'}}>Познакомиться</Link>
                <Link to='/codex'>Кодекс гор</Link>
                <Link to='/projects' state={{title: 'Проекты'}}>Увидеть следы</Link>
            </nav>
        </header>
    )
}

export default Header