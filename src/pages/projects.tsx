import "../style/layout/projects.scss"
import CustomLink from '../components/service/link';

import techs from '../assets/text-data/techs.json'

interface Tech{
    title: string
    description: string
}

const teaTech: Tech[] = techs[0]
const aragornTech: Tech[] = techs[1]

export default function Projects(){
    return (
        <div className="projects-container">
            <h2>Библиотека хранителя ⛺</h2>
            <p>
                Здесь представлены все работы над которыми я работал
            </p>
            <nav>
                <CustomLink 
                    link='https://daily-tea.vercel.app'
                    title='Чайная 🧋'
                    techs={teaTech}
                >
                    Этот сайт позиционируется как сайт-меню для чайного ресторана<br />
                </CustomLink>
                <CustomLink
                    link="https://aragorn-one.vercel.app"
                    title="Арагорн"
                    techs={aragornTech}
                >
                    Вы находитесь на этом сайте. Это - сайт портфолио.
                </CustomLink>
            </nav>
        </div>
    )
}