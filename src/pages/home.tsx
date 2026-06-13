import { useLocation } from 'react-router';
import '/src/style/layout/home.scss'

import photoOfMe from '../assets/img/jpg/tg1.jpeg'


export default function Home(){
    const location = useLocation();
    const {title} = location.state || {};

    return(
        <section className="home">
            <h1>{title}</h1>
            
            <section className='welcome-title'>
                <article className='welcome-text'>
                    <h3>Кто я?</h3>
                    <p>
                        Мне приятно думать о том, что я - снежный барс в IT среде. <br />
                        Мне нравится развиваться, узнавать что-то новое и быть творцом, 
                        который не стоит на месте, а прыгает в пропасть и улетает в закат.
                    </p>
                </article>
                <img src={photoOfMe} alt="" />
            </section>
            <section className='short-info'>
                <h2>Миссия</h2>
                <p>
                    Я хочу строить миры, где каждый сможет ощущить себя живым. Где не нужно будет
                    сбегать от реальности, а компьютеры будут помогать людям жить в реальном мире.
                    Также, я хочу отправиться в путешествие, где смогу получать вдохновление и
                    найти место, где буду чувствовать себя кофмортно.
                </p>
            </section>
        </section>
    )
}