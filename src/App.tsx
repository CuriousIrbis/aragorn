import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout";

import Home from "./pages/home";

import NotFound from './pages/notFound'
import Projects from "./pages/projects";
import About from "./pages/about";
import Codex from "./pages/codex";
import GeoLocation from './pages/location';
import Login from './pages/login';
import { createContext, useState } from "react";

export const UserContext = createContext('')
localStorage.setItem('login', 'false')

export default function App(){

  const [userName, setUsername] = useState('')

  return (
    <UserContext value={{userName, setUsername}}>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}/>
          <Route path="about" element={<About />}/>
          <Route path="codex" element={<Codex />}/>
          <Route path="location" element={<GeoLocation />}/>
        </Route>
        <Route path="*" element={< NotFound/>}/>
      </Routes>
    </UserContext>
  )
}