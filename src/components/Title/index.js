import React from "react";
import { Container } from "../../StyledComponents";
import background from "../../images/backgroundOne.jpg";

const styles = {
  backgroundStyle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)), url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    paddingTop: "250px",
    paddingBottom: "250px"
  }
};

const Title = () => (
  <div style={styles.backgroundStyle}>
    <Container style={{ textAlign: "center" }}>
      <h2 style={{ color: "#F5F4F2" }}>
        We are
        <span style={{ fontSize: "150%" }}> CodePurpose </span>a one-stop dev
        shop for custom software solutions. We build original, top-quality
        software and fill the gaps for companies looking to outsource their tech
        team.
      </h2>
    </Container>
  </div>
);

export default Title;
