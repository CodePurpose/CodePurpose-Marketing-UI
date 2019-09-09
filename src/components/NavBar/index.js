import React, { Component } from "react";
import { Nav, NavItems, NavLinks, NavTitle, MenuIcon } from "./navBarStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import NavMobileMenu from "../NavMobileMenu";
import Backdrop from "../Backdrop";
import ContactUs from "../ContactUs/index";

class NavBar extends Component {
  state = { mobileMenuOpen: false, contactUsModal: false };

  menuToggleHandler = () => {
    this.setState(prevState => {
      return { mobileMenuOpen: !prevState.mobileMenuOpen };
    });
  };

  contactUsModalHandler = () => {
    this.setState(prevState => {
      return {
        contactUsModal: !prevState.contactUsModal,
        mobileMenuOpen: false
      };
    });
  };

  backdropHandler = () => {
    this.setState({ mobileMenuOpen: false });
  };

  render() {
    const { mobileMenuOpen, contactUsModal } = this.state;
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
            <li>
              <NavLinks to="" onClick={this.contactUsModalHandler}>
                Contact
              </NavLinks>
            </li>
          </NavItems>
          <MenuIcon onClick={this.menuToggleHandler}>
            <FontAwesomeIcon icon={faAlignJustify} size="2x" />
          </MenuIcon>
        </Nav>
        <NavMobileMenu
          open={mobileMenuOpen}
          click={this.menuToggleHandler}
          contactUsModal={this.contactUsModalHandler}
        />
        {mobileMenuOpen ? <Backdrop click={this.backdropHandler} /> : null}
        {contactUsModal ? (
          <ContactUs click={this.contactUsModalHandler} />
        ) : null}
      </div>
    );
  }
}

export default NavBar;
