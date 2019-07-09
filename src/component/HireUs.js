import React from "react";
import { Container, TextContainer } from "../Styles/StyledComponents";
import computer from "../images/computer.jpg";

const styles = {
  backgroundStyle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), url(${computer})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    paddingTop: "150px",
    paddingBottom: "150px"
  },
  containerStyle: {
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column"
  }
};

const HireUs = () => (
  <div style={styles.backgroundStyle}>
    <Container style={styles.containerStyle}>
      <h3>Are you looking to hire your own team of engineers?</h3>
      <TextContainer style={{ alignSelf: "center" }}>
        <p style={{ marginTop: "0" }}>
          Our solutions extend to more than just our custom software.
          CodePurpose was founded on the principle of innovation and
          opportunity. We provide top-quality engineers looking to fill your
          needs whether that means internships, contract projects, or permanent
          solutions. Our vast pool of engineers come from varied backgrounds but
          share the same objective of providing innovation and superior builds.
        </p>
      </TextContainer>
    </Container>
  </div>
);

export default HireUs;
