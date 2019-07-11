import React from "react";
import { MobileMenu, MenuItem, MenuList } from "../../StyledComponents";

const styles = {
  ulStyle: {
    listStyle: "none",
    textAlign: "center",
    paddingLeft: "0"
  }
};

const NavMobileMenu = props => (
  <MobileMenu open={props.open}>
    <ul style={styles.ulStyle}>
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
    </ul>
  </MobileMenu>
);

export default NavMobileMenu;
