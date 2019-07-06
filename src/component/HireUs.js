import React from "react";
import { Container } from "../Styles/StyledComponents";
import code from "../images/code.jpg";

const styles = {
  backgroundStyle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), url(${code})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    paddingTop: "150px",
    paddingBottom: "150px"
  },
  textWidth: {
    alignSelf: "center",
    maxWidth: "700px",
    margenLeft: "auto",
    margenRight: "auto"
  }
};

const HireUs = () => (
  <div style={styles.backgroundStyle}>
    <Container
      style={{
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h3>Are you looking to hire your own team of engineers?</h3>
      <div style={styles.textWidth}>
        <p style={styles.textWidth}>
          Our solutions extend to more than just our custom software.
          CodePurpose was founded on the principle of innovation and
          opportunity. We provide top-quality engineers looking to fill your
          needs whether that means internships, contract projects, or permanent
          solutions. Our vast pool of engineers come from varied backgrounds but
          share the same objective of providing innovation and superior builds.
        </p>
      </div>
    </Container>
  </div>
);

export default HireUs;
