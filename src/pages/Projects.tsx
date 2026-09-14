import Intro from "../components/Intro";

import data from '../assets/text/previews.json';
import projects from '../assets/text/projects.json';
import type IProject from "../types/TProject";

const position2 = data[1];

export default function Projects(){
    return (
        <div>
            <Intro 
                position={2}
                title={position2.title}
                header={position2.header}
                description={position2.description}
            />
            <section>
                {projects.map((project: IProject, index: number) => {
                    return (
                        <div className="flex flex-row justify-between px-17.5 py-30 border-[.3px] border-dark-hacki group hover:bg-bg-browney duration-300">
                            <div className={`${index % 2 == 0 ? "text-orange" : ''} font-jetbrains pr-20`}>0{index+1}</div>
                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex flex-row gap-7 items-center justify-start">
                                    <h2 className="text-[26px] font-bold">{project.title}</h2>
                                    <span className="text-dark-hacki text-[12px] border-[.3px] border-dark-hacki px-3 py-1">{project.type}</span>
                                    {project.status == 'Live' ? (
                                        <span className="text-green flex flex-row items-center gap-1 text-[12px]"><div className="w-1 h-1 bg-green rounded-full"></div>{project.status}</span>
                                    ) : project.status == 'In dev' && (
                                        <span className="text-orange flex flex-row items-center gap-1 text-[12px]"><div className="w-1 h-1 bg-orange rounded-full"></div>{project.status}</span>
                                    )}
                                </div>
                                <div>
                                    <p className="text-hacki">{project.description}</p>
                                    <ul>
                                        {project.profits.map((profit: string) => (
                                            <li className="group-hover:text-hacki text-dark-hacki">
                                                - {profit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-row gap-4 font-jetbrains">
                                    {project.techs.map((tech: string) => (
                                        <span className="text-dark-hacki border-[.3px] border-dark-hacki px-3 py-2 text-[12px]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 text-dark-hacki">
                                <div className="text-right text-[10px]">
                                    <span>{project.year}</span>
                                </div>
                                <div className="flex flex-col gap-1 text-[10px]">
                                    <a href={project.links.GitHub} className="border-[.3px] px-3 py-1 hover:text-beige">GitHub ↗</a>
                                    <a href={project.links.Vercel} className="border-[.3px] px-3 py-1 hover:text-beige">Vercel ↗</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}