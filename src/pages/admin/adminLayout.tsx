import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Header/adminHeader";

export default function AdminLayout(){
    return (
        <div>
            <AdminHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}