import Card from "../components/Interests/Card";
import Intro from "../components/Intro";

import data from '../assets/text/previews.json'

import {useState} from 'react'

import interests from '../assets/text/interests.json';
import type ICardData from '../types/TCard'

const position1 = data[0];

export default function Contacts(){
    const [openedCardId, setOpenedCardId] = useState<number | null>(null);
    const handleClick = (id: number) => {
        setOpenedCardId(openedCardId === id ? null : id)
    }

    return (
        <div>
            <Intro 
                position={1}
                title={position1.title}
                header={position1.header}
                description={position1.description}
            />
            <section className="flex flex-row justify-between flex-wrap">
                {interests.map((card: ICardData, index: number) => {
                    const isOpened = openedCardId === index
                    return (
                        <Card 
                            key={index}
                            {...card}
                            position={index+1}
                            handleClick={() => handleClick(index)}
                            isOpened={isOpened}
                        />
                    )
                })}
            </section>
            
        </div>
    )
}