import { useLocation } from 'react-router';
import '/src/style/layout/home.scss'

export default function Home(){
    const location = useLocation();
    const {title} = location.state || {};


    return(
        <section className="home">
            <h1>{title}</h1>
            <section>
                <h2>Добро пожаловать на главную страницу</h2>
                <p>Здесь небольшая подборка из того, что мне нравится:</p>
                
            </section>
        </section>
    )
}