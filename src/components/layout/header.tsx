import { Link } from 'react-router';
import '/src/style/layout/header.scss'

import Icon from './../../assets/img/png/leopard.png'
import { useContext } from 'react';
import { UserContext } from '../../App';

function Header(){
    const {userName} = useContext(UserContext);

    return(
        <header>
            <img src={Icon} alt="" />
            <p>user: {userName}</p>
            {/* <p>loged: { ? 'enter' : 'exited'}</p> */}
            <nav>
                <Link to='/' state={{title: 'Дом'}}>Домой🏡</Link>
                <Link to='/about' state={{title: 'Знакомство'}}>Познакомиться🛤️</Link>
                <Link to='/codex'>Кодекс гор🏔️</Link>
                <Link to='/projects' state={{title: 'Проекты'}}>Увидеть следы⛺</Link>
                <Link to='/location'>Мир🌎</Link>
            </nav>
        </header>
    )
}

export default Header