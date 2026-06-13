import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout";

import Home from "./pages/home";

import NotFound from './pages/notFound'
import Projects from "./pages/projects";
import About from "./pages/about";
import Codex from "./pages/codex";
import GeoLocation from './pages/location';
import Login from './pages/login';
import { createContext, useEffect, useState } from "react";
import TestPage from "./pages/newPage";

interface ContextUser{
  userName: string
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

const UserContext = createContext<ContextUser>({
  userName: '',
  setUsername: () => {}
})

export default function App(){
  const [userName, setUsername] = useState('')

  useEffect(() => {
    localStorage.setItem('login', 'false')
  }, [])

  return (
    <UserContext value={{userName, setUsername}}>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="secret" element={<TestPage />}/>
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

export {UserContext}