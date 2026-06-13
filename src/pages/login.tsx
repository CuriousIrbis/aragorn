import { useContext, useState } from "react";
import { UserContext } from "../App";
import {  useNavigate } from "react-router";

import '../style/layout/login.scss';

interface ContextUser{
    userName: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

export default function Login(){
    const { userName, setUsername } = useContext<ContextUser>(UserContext)
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()

    async function handleRedirect(ev: any){
        ev.preventDefault()

        try{
            if(inputValue.trim() !== ''){
                alert(`Регистрация прошла успешно. Welcome, ${inputValue}`)
                setUsername(inputValue)
                localStorage.setItem('login', 'true')
                setInputValue('')
                console.log(userName, inputValue)
                navigate('/')
            } else {
                alert('Не хватает данных')
            }
        } catch(err){
            console.error('Ошибка', err)
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={(ev) => handleRedirect(ev)}>
                <label htmlFor="username">Имя: </label>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="submit" value="Внести" />
            </form>
        </div>
    )
}