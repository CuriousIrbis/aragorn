import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Homepage from "./pages/user/life/homePage";
import AdminHome from "./pages/admin/adminHome";
import AdminLayout from "./pages/admin/adminLayout";
import Workhome from "./pages/user/work/workPage";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Homepage />} />
      </Route>
      <Route path="work" element={<Layout />}>
        <Route index element={<Workhome />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />}/> 
      </Route>
    </Routes>
  )
}