import { Outlet, useNavigate } from "react-router";
import Header from "./components/layout/header";

import '/src/style/layout/main.scss'
import Footer from "./components/layout/footer";

async function login(){
    const navigate = useNavigate()
    const logStatus = await localStorage.getItem('login')

    if(logStatus == 'false'){
        navigate('/login')
    }
}

export default function MainLayout(){
    login()

    return (
        <div className="main-container">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}