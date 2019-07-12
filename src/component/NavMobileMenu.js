import React from "react";
import {
  MobileMenu,
  MenuItem,
  MenuList,
  MenuUL
} from "../Styles/StyledComponents";

const NavMobileMenu = props => (
  <MobileMenu open={props.open}>
    <MenuUL>
      <MenuList>
        <MenuItem href="/">Home</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="/">About</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="/">Blog</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="/">Careers</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem href="/">Contact</MenuItem>
      </MenuList>
    </MenuUL>
  </MobileMenu>
);

export default NavMobileMenu;
