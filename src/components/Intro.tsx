import type IIntro from "../types/TIntro";

export default function Intro({position, title, header, description}: IIntro){
    return (
        <section className="px-17.5 pt-20">
            <h1 className="text-green flex flex-row items-center gap-3 font-jetbrains">
                <span className="bg-green h-px w-5"></span><span className="[word-spacing:10px] text-[12px]">0{position} / {title}</span>
            </h1>
            <div className="flex flex-row items-center justify-between py-18">
                <h2 className="text-[80px] leading-22.5 font-bold font-barlow tracking-[2px] max-w-110">{header}</h2>
                <p className="text-dark-hacki text-3.5 max-w-100">{description}</p>
            </div>
        </section>
    )
}