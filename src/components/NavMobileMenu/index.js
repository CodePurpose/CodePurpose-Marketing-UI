import React from "react";
import { MobileMenu, MenuItem, MenuList, MenuUL } from "./mobileMenuStyle";

const NavMobileMenu = props => (
  <MobileMenu open={props.open}>
    <MenuUL>
      <MenuList>
        <MenuItem smooth to="/#home" onClick={props.click}>
          Home
        </MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem smooth to="/#about" onClick={props.click}>
          About
        </MenuItem>
      </MenuList>
      {/*
      Will add when blog is ready
      <MenuList>
        <MenuItem smooth to="/">Blog</MenuItem>
      </MenuList> */}
      <MenuList>
        <MenuItem smooth to="/#careers" onClick={props.click}>
          Careers
        </MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem smooth to="/" onClick={props.contactUsModal}>
          Contact
        </MenuItem>
      </MenuList>
    </MenuUL>
  </MobileMenu>
);

export default NavMobileMenu;
