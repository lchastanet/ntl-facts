import { Route, Routes } from "react-router-dom"

import "../styles/Main.css"

import Home from "../pages/Home"
import Notes from "../pages/Notes"
import Facts from "../pages/Facts"
import NotFound from "../pages/NotFound"

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts/:type" element={<Facts />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  )
}
