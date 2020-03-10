import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link to="/">Welkom</Link>
      </li>
      <li>
        <Link to="/about">Wat is het?</Link>
      </li>
      <li>
        <Link to="/services">Diensten</Link>
      </li>
      <li>
        <Link to="/blog">Mededelingen</Link>
      </li>
    </ul>
  </div>
)

export default Menu
