import React from "react";
import { MobileMenu, MenuItem, MenuList, MenuUL } from "../../StyledComponents";

const NavMobileMenu = props => (
  <MobileMenu open={props.open}>
    <MenuUL>
      <MenuList>
        <MenuItem to="/#home">Home</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem to="/#about">About</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem to="/">Blog</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem to="/#careers">Careers</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem to="/">Contact</MenuItem>
      </MenuList>
    </MenuUL>
  </MobileMenu>
);

export default NavMobileMenu;
