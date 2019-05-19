import React from "react";
import { Nav, NavItems, NavLinks, NavTitle } from "../Styles/StyledComponents";

const NavBar = () => (
  <Nav>
    <NavTitle>CodePurpose</NavTitle>
    <NavItems>
      <li>
        <NavLinks href="/">About</NavLinks>
      </li>

      <li style={{ paddingLeft: "10px" }}>
        <NavLinks href="/">Contact</NavLinks>
      </li>
    </NavItems>
  </Nav>
);

export default NavBar;
