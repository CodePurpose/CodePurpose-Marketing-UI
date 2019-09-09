import React, { Component } from "react";
import {
  FooterContainer,
  FooterBackground,
  FooterUl,
  FooterItem,
  FooterTitle
} from "./footerStyle";
import ContactUs from "../ContactUs";

class Footer extends Component {
  state = { modal: false };

  modalToggleHandler = () => {
    this.setState(prevState => {
      return { modal: !prevState.modal };
    });
  };

  render() {
    const { modal } = this.state;
    return (
      <div>
        {modal ? <ContactUs click={this.modalToggleHandler} /> : null}
        <FooterBackground>
          <FooterContainer>
            <FooterTitle>CodePurpose</FooterTitle>
            <FooterUl>
              <li>
                <FooterItem onClick={this.modalToggleHandler}>
                  Contact Us
                </FooterItem>
              </li>
            </FooterUl>
          </FooterContainer>
        </FooterBackground>
      </div>
    );
  }
}

export default Footer;
