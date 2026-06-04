import { Link } from 'react-router';
import '/src/style/layout/header.scss'

import Icon from './../../assets/img/png/leopard.png'

function Header(){
    return(
        <header>
            <img src={Icon} alt="" />
            <nav>
                <Link to='/' state={{title: 'дом'}}>Домой</Link>
                <Link to='/interests' state={{title: 'интересы'}}>Интересы</Link>
                <Link to='/projects' state={{title: 'проекты'}}>Проекты</Link>
            </nav>
        </header>
    )
}

export default Header