import { Link } from 'react-router';
import '/src/style/layout/header.scss'

function Header(){
    return(
        <header>
            <img src="/src/assets/img/png/leopard.png" alt="" />
            <nav>
                <Link to='/' state={{title: 'дом'}}>Домой</Link>
                <Link to='/interests' state={{title: 'интересы'}}>Интересы</Link>
                <Link to='/projects' state={{title: 'проекты'}}>Проекты</Link>
            </nav>
        </header>
    )
}

export default Header