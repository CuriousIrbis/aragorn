import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./Layout";
import links from "./constants/Links";
import type ILink from "./types/TLinks";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

export default function App(){
  const location = useLocation();

  return(
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            {links.map((link: ILink, index: number) => {
              const Component = link.pageLink;

              return (
                <Route 
                  key={index}
                  path={link.address}
                  element={<Component />}
                />
              )
            })}
          </Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>

  )
}