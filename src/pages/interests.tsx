import { useLocation } from "react-router";
import Knowledge from "../components/service/knowledge";

import interests from '../assets/text-data/favorites.json'

import "/src/style/layout/interests.scss"

export default function Interests(){
    const location = useLocation();
    const {title} = location.state || {};

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