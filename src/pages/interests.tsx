import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Knowledge from "../components/service/knowledge";

import interests from '../assets/text-data/favorites.json'

interface Interes{
    title: string
    description: string
}

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