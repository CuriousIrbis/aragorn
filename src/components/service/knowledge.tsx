import '/src/style/service/knowledge.scss'

export default function Knowledge(props){
    const interests = props.data.map((interes) => {
        return (
            <div className='knowledge-element'>
                <h3>{interes.title}</h3>
                <span>{interes.description}</span>
            </div>
        )
    })
    return (
        <section className='knowledge-section'>
            <div className='knwowledge-list'>
                {interests}
            </div>
        </section>
    )
}