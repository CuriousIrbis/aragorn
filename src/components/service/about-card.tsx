import type {JSX, ReactNode} from 'react';

interface Data{
    cName: string
    title: string
    children: ReactNode
}

export default function AboutCard({cName, title, children}: Data): JSX.Element{
    return (
        <section className={cName}>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}