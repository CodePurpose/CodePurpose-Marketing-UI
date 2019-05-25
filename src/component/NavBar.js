import React from "react";
import { Nav, NavItems, NavLinks, NavTitle } from "../Styles/StyledComponents";

const NavBar = () => (
  <Nav>
    <NavTitle>CodePurpose</NavTitle>
    <NavItems>
      <li>
        <NavLinks href="/">Home</NavLinks>
      </li>
      <li>
        <NavLinks href="/">About</NavLinks>
      </li>
      <li>
        <NavLinks href="/">Blog</NavLinks>
      </li>
      <li>
        <NavLinks href="/">Careers</NavLinks>
      </li>
      <li>
        <NavLinks href="/">Contact</NavLinks>
      </li>
    </NavItems>
  </Nav>
);

export default NavBar;
