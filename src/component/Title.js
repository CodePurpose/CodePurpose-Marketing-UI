import React from "react";
import { Container } from "../Styles/StyledComponents";
import background from "../images/backgroundOne.jpg";

const styles = {
  backgroundStyle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    paddingTop: "250px",
    paddingBottom: "250px"
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    padding: ".5em"
  }
};

const Title = () => (
  <div style={styles.backgroundStyle}>
    <Container>
      <div style={styles.textStyle}>
        <h2>
          We are
          <span style={{ fontSize: "150%" }}> CodePurpose </span>a one-stop dev
          shop for custom software solutions. We build original, top-quality
          software and fill the gaps for companies looking to outsource their
          tech team.
        </h2>
      </div>
    </Container>
  </div>
);

export default Title;
