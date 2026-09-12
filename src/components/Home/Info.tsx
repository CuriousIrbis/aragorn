import type IInfo from "../../types/TInfo";

export default function Info({title, info}: IInfo){
    return (
        <div>
            <h3 className="text-dark-hacki text-[14px]">{title}</h3>
            <p className="text-[20px] text-hacki">{info}</p>
        </div>
    )
}

export function LinkInfo({title, info}: IInfo){
    return(
        <div>
            <h3 className="text-dark-hacki text-[14px]">{title}</h3>
            <a className="text-[20px] text-hacki" href={info}>{info}</a>
        </div>
    )
}