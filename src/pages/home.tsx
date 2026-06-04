import { useLocation } from 'react-router';
import '/src/style/layout/home.scss'
import axios from 'axios';
import { useEffect } from 'react';

async function getFavorites(){
    try{
        const rawData = await axios.get('/src/assets/text-data/favorites.json')
        const data = JSON.stringify(rawData.data)
        console.log(data)
    } catch(error){
        console.error(error)
    }
}

export default function Home(){
    const location = useLocation();
    const {title} = location.state || {};

    useEffect(() => {
        getFavorites()
    }, [])

    return(
        <section className="home">
            <h1>{title}</h1>
            <section>
                <h2>Добро пожаловать на главную страницу</h2>
                <p>Здесь небольшая подборка из того, что мне нравится:</p>
                
            </section>
        </section>
    )
}