import { Link } from 'react-router';
import axios from 'axios';

import '/src/style/service/notFound.scss'
import { useEffect, useState } from 'react';

export default function NotFound(){
    const [spell, setSpells] = useState('');

    async function handleSpell(){
        try{
            const iCard = await axios.get('https://potterapi-fedeperin.vercel.app/en/spells');
            setSpells(iCard.data[8].spell)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        handleSpell()
    }, [])

    return (
        <div className='not_found'>
            <Link to='/'>Вернитесь домой</Link>
            <section>
                <h1>Страничка не найдена</h1>
                <h2>{spell}</h2>
            </section>
        </div>
    )
}