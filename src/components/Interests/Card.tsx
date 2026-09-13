import type {ICardProps} from "../../types/TCard";

export default function Card({position, title, description, additional, link, handleClick, isOpened}: ICardProps){
    const isEven = position! % 2;

    return (
        <section 
            className="flex flex-col gap-5 duration-400 group hover:bg-bg-browney px-10 py-10 my-2 max-w-120" 
            onClick={() => {
                handleClick()
            }}
        >
            <h2 className={`${isEven ? 'text-orange' : ''} font-jetbrains`}>0{position}</h2>
            <h3>{title}</h3>
            <p className="text-dark-hacki group-hover:text-hacki duration-400">{description}</p>
            {isOpened && (
                <div className="flex flex-col gap-5">
                    <hr />
                    {link ? (
                        <a href={link}>Ссылка: {additional}</a>
                    ) : (
                        <span>{additional}</span>
                    )}
                    
                </div>
            )}
        </section>
    )
}