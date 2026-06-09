import Compass from "../components/service/compass";

interface Values{
    id: number
    title: string
    direction: string
    description: string
    color: string
}

const values: Values[] = [
    {
        id: 1,
        title: 'Глубина',
        direction: 'Север',
        description: 'Мне нужен один, но доведенный до конца результат, а не несколько, но незавершенных',
        color: '#666eff'
    },
    {
        id: 2,
        title: 'Эстетика',
        direction: 'Восток',
        description: 'Для меня интерфейс - это способ общения друг с другом через расстояние, а код - элегантное решение этого вопроса',
        color: '#e02561'
    },
    {
        id: 3,
        title: 'Верность',
        direction: 'Юг',
        description: 'Команда - это не просто набор людей, а сплоченные одной целью люди, которые дружны друг к другу и поддерживают в любых ситуациях',
        color: '#C1440E'
    },
    {
        id: 4,
        title: 'Адаптивность',
        direction: 'Запад',
        description: 'Мир и жизнь - это и есть изменения, так что я живу',
        color: '#eca241'
    }
]

export default function codex(){
    return (
        <section className="mountain-codex">
            <h2>Четыре столпа Кодекса⚖️</h2>
            <p>
                Кодекс - это устав, который гласит <i>как</i> я работаю.
            </p>
            <section className="pillar-section">
                <Compass 
                    data={values}
                />
            </section>
        </section>
    )
}