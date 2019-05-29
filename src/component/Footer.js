import React from "react";
import {
  FooterContainer,
  FooterBackground,
  List,
  Item
} from "../Styles/StyledComponents";

const styles = {
  title: {
    fontSize: "2em",
    color: "white"
  }
};

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <div style={styles.title}>
          <p>CodePurpose</p>
        </div>
        <div style={{ display: "flex", color: "white" }}>
          <List>
            <li>
              <Item>Home</Item>
            </li>
            <li>
              <Item>Careers</Item>
            </li>
            <li>
              <Item>Blog</Item>
            </li>
            <li>
              <Item>About</Item>
            </li>
          </List>
          <List>
            <li>Contact</li>
            <li>
              <Item>Phone: ###-###-####</Item>
            </li>
            <li>
              <Item>Email: email@email.com</Item>
            </li>
            <li>
              <Item>Location: Address</Item>
            </li>
          </List>
        </div>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
