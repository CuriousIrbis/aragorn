import "../style/layout/projects.scss"
import CustomLink from '../components/service/link';

import techs from '../assets/text-data/techs.json'

interface Tech{
    title: string
    description: string
}

const teaTech: Tech[] = [
    {
        title: 'React',
        description: 'Весь проект построен на технологии React и JSX'
    },
    {
        title: 'React Router',
        description: 'React Router применялся для создания и обработки страниц новостей, чаев и т.п.'
    },
    {
        title: 'SCSS',
        description: 'Данная технология применялась для упрощения написания кода на CSS'
    },
    {
        title: 'React-hot-Toast',
        description: 'Эта технология применялась для упрощения редактирования выскакивающих окон'
    },
    {
        title: "Vite",
        description: "Использовался для упрощения создания приложения"
    }
]

const aragornTech: Tech[] = [
    {
        title: "React",
        description: "Используется как основной фреймворк для работы"
    },
    {
        title: "React Router",
        description: "Используется для навигации между страницами"
    },
    {
        title: "Axios",
        description: "Используется для асинхронного доступа по API"
    },
    {
        title: "SCSS",
        description: "Используется для упрощения редактирования файлов CSS"
    }
]

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