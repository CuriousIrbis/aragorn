import { useLocation } from 'react-router';
import '/src/style/layout/home.scss'

import photoOfMe from '../assets/img/jpg/tg1.jpeg'

const technologies = [
    'HTML5',
    'CSS3',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'React Router',
    'Axios'
]

export default function Home(){
    const location = useLocation();
    const {title} = location.state || {};

    const usedTechs = technologies.map((tech: string) => {
        return(
            <li>
                {tech}
            </li>
        )
    })


    return(
        <section className="home">
            <h1>{title}</h1>
            <section>
                <h2>Добро пожаловать на главную страницу</h2>
                <img src={photoOfMe} alt="" style={{maxWidth: '300px'}} />
            </section>
            <section className='intro-section'>
                <h3>Немного о себе</h3>
                <p>
                    Меня зовут Марк :) <br />
                    Я из Москвы, и у меня есть огромная мечта 
                    и желание стать профессионалом в своем деле <br />
                </p>
                <p>
                    Честно, я не знаю что тут и писать, поскольку никогда себя не представлял<br />
                    и для меня это очень стрессово... <br />
                    Ну, например, мне нравится играть в игры, мне нравится кодить, <br />
                    я получаю от этого удовольствие, однако мне очень неловко говорить о своих <br />
                    достижениях...
                </p>
                <p>
                    Так вот, у меня есть прекрасная девушка ( уже невеста ), которую я очень сильно люблю. <br />
                    Так же, у меня есть мечта, стать настоящим Fullstack разработчиком, и сейчас я только в начале <br />
                    этого пути.
                </p>
                <p>
                    Кстати, о Fullstack - сейчас, 4 июня 2026 года, я занимаюсь разработкой этого сайта, и уже изучил кое-что:
                </p>
                <ul>
                    {usedTechs}
                </ul>
            </section>
        </section>
    )
}