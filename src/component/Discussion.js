import React from "react";
import { Container, TextContainer } from "../Styles/StyledComponents";
import discussion from "../images/discussion.jpg";

const styles = {
  backgroundStyle: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), url(${discussion})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    paddingTop: "150px",
    paddingBottom: "150px"
  },
  containerStyle: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    color: "white"
  }
};

const Discussion = () => (
  <div style={styles.backgroundStyle}>
    <Container style={styles.containerStyle}>
      <h3>THERE IS ALWAYS ROOM FOR DISCUSSION</h3>
      <TextContainer style={{ alignSelf: "center" }}>
        <p style={{ marginTop: "0" }}>
          Our objective in striving for identity equity is never to exclude an
          employee, client, or anyone else. We are aspiring to start a
          conversation for change first and foremost. We expect to make mistakes
          because they are a benchmark of progress. But all progress is gradual,
          and solutions are only found through an iterative approach.
        </p>
      </TextContainer>
    </Container>
  </div>
);

export default Discussion;
