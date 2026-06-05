import '/src/style/service/knowledge.scss'

export default function Knowledge(props: any){
    const interests = props.data.map((interes: any) => {
        return (
            <div className='knowledge-element'>
                <h3>{interes.title}</h3>
                <span>{interes.description}</span>
            </div>
        )
    })
    return (
        <section className='knowledge-section'>
            <div className='knowledge-list'>
                {interests}
            </div>
        </section>
    )
}