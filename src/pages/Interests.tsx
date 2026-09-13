import Card from "../components/Interests/Card";
import Intro from "../components/Interests/Intro";

import {useState} from 'react'

import interests from '../assets/text/interests.json';
import type ICardData from '../types/TCard'

export default function Contacts(){
    const [openedCardId, setOpenedCardId] = useState<number | null>(null);
    const handleClick = (id: number) => {
        setOpenedCardId(openedCardId === id ? null : id)
    }

    return (
        <div className="py-20">
            <Intro />
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