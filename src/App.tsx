import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import links from "./constants/Links";
import type ILink from "./types/TLinks";

export default function App(){
  return(
    <Routes>
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
  )
}