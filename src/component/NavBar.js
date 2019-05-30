import React from "react";
import {
  Nav,
  NavItems,
  NavLinks,
  NavTitle,
  MenuIcon
} from "../Styles/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

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
    <MenuIcon>
      <FontAwesomeIcon icon={faAlignJustify} size="2x" />
    </MenuIcon>
  </Nav>
);

export default NavBar;
