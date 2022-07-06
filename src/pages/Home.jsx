import { NavLink } from "react-router-dom"

import "../styles/Home.css"

import Clock from "../components/Clock"

export default function Home() {
  return (
    <div className="home-container">
      <Clock />
      <NavLink to="/facts/Dog">Dog fact</NavLink>
      <NavLink to="/facts/Cat">Cat fact</NavLink>
      <NavLink to="/facts/Kangaroo">Kangaroo fact</NavLink>
    </div>
  )
}
