import { useState } from "react";

import '../../style/service/compass.scss'

interface Codex{
    id: number
    title: string
    direction: string
    description: string
    color: string
}

interface Data{
    data: Codex[]
}

export default function Compass({data}: Data){
    const [isActive, setActive] = useState<Codex | null>(null)

    function handleHover(value: Codex){
        setActive(value)
    }

    function handleExit(){
        setActive(null)
    }

    return (
        <div className="compass-container">
            <div className="compass">
                {data.map((value) => (
                    <div 
                        className={`claster${value.id} clasters`}
                        onMouseEnter={() => handleHover(value)}
                        onMouseLeave={handleExit}
                        key={value.id}
                        style={{backgroundColor: value.color}}
                    >
                        <h3>{value.title}</h3>
                    </div>
                ))}
            </div>

            <div className={isActive ? "opened-data" : "closed-data"} aria-hidden={isActive ? 'false' : 'true'}>
                <h2 style={{textShadow: `3px 3px 10px ${isActive?.color}`}}>{isActive?.title}</h2>
                <h3>{isActive?.description}</h3>
            </div>
            
        </div>
    )
}