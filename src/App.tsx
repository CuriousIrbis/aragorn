import { Route, Routes } from "react-router";
import MainLayout from "./mainLayout";

import Home from "./pages/home";

import NotFound from './pages/notFound'
import Projects from "./pages/projects";
import About from "./pages/about";
import Codex from "./pages/codex";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />}/>
        <Route path="about" element={<About />}/>
        <Route path="codex" element={<Codex />}/>
      </Route>
      <Route path="*" element={< NotFound/>}/>
    </Routes>
  )
}