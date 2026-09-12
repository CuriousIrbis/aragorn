import techs from '../../constants/Techs';

export default function Stack(){
    return (
        <section className='px-17.5 py-4 flex flex-row gap-5'>
            {techs.map((tech: string) => (
                <span className='text-dark-hacki duration-250 hover:text-hacki hover:cursor-default'>
                    {tech}
                </span>
            ))}
        </section>
    )
}