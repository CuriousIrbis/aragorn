import type IContact from "../../types/TContact";

export default function ContactCard({title, link, description}: IContact){
    return (
        <div className="
            flex flex-row 
            items-center justify-between 
            px-17.5 
            border-[.3px] border-dark-hacki 
            group 
            hover:bg-bg-browney
            duration-400 
            py-30
            "
        >
            <div className="pr-20 w-full max-w-62.5">
                <h2 className="text-dark-hacki group-hover:text-green text-[12px]">{title}</h2>
            </div>
            <div className="flex-1">
                {link.includes("@gmail.com") ? (
                    <a href={'mailto:'+link} className="group-hover:text-orange text-[32px] font-bold font-barlow px-10 py-5">{link}</a>  
                ) : (
                    <a href={link} className="group-hover:text-orange text-[32px] font-bold font-barlow px-10 py-5">{link}</a>  
                )}
            </div>
            <div className="flex flex-row gap-5 text-dark-hacki">
                <span>{description}</span>
                <span className="group-hover:text-orange">↗</span>
            </div>
        </div>
    )
}