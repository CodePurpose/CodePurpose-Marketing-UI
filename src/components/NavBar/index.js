import React, { Component } from "react";
import {
  Nav,
  NavItems,
  NavLinks,
  NavTitle,
  MenuIcon
} from "../../StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import NavMobileMenu from "../NavMobileMenu";
import Backdrop from "../Backdrop";

class NavBar extends Component {
  state = { mobileMenuOpen: false };

  menuToggleHandler = () => {
    this.setState(prevState => {
      return { mobileMenuOpen: !prevState.mobileMenuOpen };
    });
  };

  backdropHandler = () => {
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { mobileMenuOpen } = this.state;
    return (
      <div>
        <Nav>
          <NavTitle>CodePurpose</NavTitle>
          <NavItems>
            <li>
              <NavLinks smooth to="/#home">
                Home
              </NavLinks>
            </li>
            <li>
              <NavLinks smooth to="/#about">
                About
              </NavLinks>
            </li>
            {/* 
            Will add when blog is ready.
            <li>
              <NavLinks to="/">Blog</NavLinks>
            </li> */}
            <li>
              <NavLinks smooth to="/#careers">
                Careers
              </NavLinks>
            </li>
            {/* 
            Will add when contact form is ready.
            <li>
              <NavLinks to="/">Contact</NavLinks>
            </li> */}
          </NavItems>
          <MenuIcon onClick={this.menuToggleHandler}>
            <FontAwesomeIcon icon={faAlignJustify} size="2x" />
          </MenuIcon>
        </Nav>
        <NavMobileMenu open={mobileMenuOpen} />
        {mobileMenuOpen ? <Backdrop click={this.backdropHandler} /> : null}
      </div>
    );
  }
}

export default NavBar;