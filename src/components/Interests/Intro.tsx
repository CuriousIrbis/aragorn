export default function Intro(){
    return (
        <section className="px-17.5">
            <h1 className="text-green flex flex-row items-center gap-3 font-jetbrains">
                <span className="bg-green h-px w-5"></span><span className="[word-spacing:10px] text-[12px]">01 / INTERESTS</span>
            </h1>
            <div className="flex flex-row items-center justify-between py-18">
                <h2 className="text-[80px] leading-22.5 font-bold font-barlow tracking-[2px]">Чем я живу <br />вне кода</h2>
                <p className="text-dark-hacki text-3.5 max-w-100">Разработка — моя работа и увлечение. Но здесь то, что питает мышление за её пределами.</p>
            </div>
        </section>
    )
}