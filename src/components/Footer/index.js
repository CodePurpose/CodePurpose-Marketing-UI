import React from "react";
import {
  FooterContainer,
  FooterBackground,
  List
} from "../../StyledComponents";

const textPrimary = "#000000";

const styles = {
  title: {
    fontSize: "2em",
    color: `${textPrimary}`
  }
};

const Footer = () => {
  return (
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
          </List>
        </div>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
