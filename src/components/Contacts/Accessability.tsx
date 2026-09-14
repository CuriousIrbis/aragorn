import type IAccessability from "../../types/TAccessability";

export default function Accessability({title, description}: IAccessability){
    return (
        <section className="flex flex-col items-start gap-3">
            <h3 className="text-green text-[14px] font-barlow">{title}</h3>
            <p className="text-hacki">{description}</p>
        </section>
    )
}