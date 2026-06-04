import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Knowledge from "../components/service/knowledge";

interface Interes{
    title: string
    description: string
}

async function getInterests(){
    try{
        const interests = await axios.get('/src/assets/text-data/favorites.json')
        return interests.data;
    } catch(error: AxiosError | any){
        console.error(error);
        throw new Error("Ошибка при открытии файла");
    }
}

export default function Interests(){
    const location = useLocation();
    const {title} = location.state || {};

    const [interests, setinterests] = useState(Array<Interes | Error>)

    useEffect(() => {
        getInterests().then((value: Array<Interes | Error>) => setinterests(value))
    })

    return (
        <section>
            <h1>{title}</h1>
            <section className="interests-container">
                <Knowledge 
                    data={interests}
                />
            </section>
        </section>
    )
}