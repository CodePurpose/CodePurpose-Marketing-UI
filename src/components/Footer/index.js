import React, { Component } from "react";
import {
  FooterContainer,
  FooterBackground,
  List
} from "../../StyledComponents";
import ContactUs from "../ContactUs";

const textPrimary = "#000000";

const styles = {
  title: {
    fontSize: "2em",
    color: `${textPrimary}`
  }
};

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
            <div style={styles.title}>
              <p>CodePurpose</p>
            </div>
            <div style={{ display: "flex", color: `${textPrimary}` }}>
              <List>
                <li>
                  Contact:{" "}
                  <a href="mailto:admin@codepurpose.io">admin@codepurpose.io</a>
                </li>
                <li>
                  <div onClick={this.modalToggleHandler}>Contact Us</div>
                </li>
              </List>
            </div>
          </FooterContainer>
        </FooterBackground>
      </div>
    );
  }
}

export default Footer;
