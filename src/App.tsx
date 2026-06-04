import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout";

import Home from "./pages/home";
import Interests from "./pages/interests";

import NotFound from './pages/notFound'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="interests" element={<Interests />} />
      </Route>
      <Route path="*" element={< NotFound/>}/>
    </Routes>
  )
}