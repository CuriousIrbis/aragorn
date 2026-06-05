import { Outlet } from "react-router";
import Header from "./components/layout/header";

import '/src/style/layout/main.scss'
import Footer from "./components/layout/footer";

export default function MainLayout(){
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