import React from "react";
import { MobileMenu, MenuItem, MenuList, MenuUL } from "../../StyledComponents";

const NavMobileMenu = props => (
  <MobileMenu open={props.open}>
    <MenuUL>
      <MenuList>
        <MenuItem smooth to="/#home">Home</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem smooth to="/#about">About</MenuItem>
      </MenuList>
      {/*
      Will add when blog is ready
      <MenuList>
        <MenuItem smooth to="/">Blog</MenuItem>
      </MenuList> */}
      <MenuList>
        <MenuItem smooth to="/#careers">Careers</MenuItem>
      </MenuList>
      {/*
      Will add when contact form is created. 
      <MenuList>
        <MenuItem smooth to="/">Contact</MenuItem>
      </MenuList> */}
    </MenuUL>
  </MobileMenu>
);

export default NavMobileMenu;
