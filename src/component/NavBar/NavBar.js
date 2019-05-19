import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navBar">
    <div className="navTitle">
      <p>CodePurpose</p>
    </div>
    <div className="navItems">
      <ul>
        <li className="navItem">
          <a href="/">About</a>
        </li>

        <li className="navItem" style={{ paddingLeft: "10px" }}>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
