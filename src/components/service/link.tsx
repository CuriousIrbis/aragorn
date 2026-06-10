import type React from "react";
import { Link } from "react-router";

import "../../style/service/link.scss"

interface Tech{
    title: string
    description: string
}

interface Custom{
    link: string
    title: string
    techs: Tech[],
    children: React.ReactNode
}

export default function CustomLink({link, title, techs, children}: Custom){
    const techMap = techs.map((value: Tech) => (
        <li className="tech-li">
            <h3>{value.title}</h3>
            <p itemProp="description">{value.description}</p>
        </li>
    ))
    
    return (
        <div className="custom-link">
            <section>
                <Link to={link}>{title}</Link>
                <p itemProp="description">{children}</p>
            </section>
            <section>
                <p>В данном приложении использовались такие технологии, как:</p>
                <ul>{techMap}</ul>
            </section>

        </div>
    )
}