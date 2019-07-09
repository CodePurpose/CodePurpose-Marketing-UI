import React from "react";
import { Container, TextContainer, Text } from "../Styles/StyledComponents";

const primary = "#fafafa";
const secondary = "#00bcd4";

const styles = {
  containerStyle: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  backgroundStyle: {
    background: primary,
    paddingBottom: "1em"
  }
};

const AboutUs = () => (
  <div style={styles.backgroundStyle}>
    <Container style={styles.containerStyle}>
      <h1 style={{ color: secondary }}>ABOUT US</h1>
      <h3>WHO ARE WE</h3>
      <TextContainer style={{ alignSelf: "center" }}>
        <Text>
          We are a group of innovators, developers, and moonlighters pushing for
          change in an industry lacking inclusion. We believe diversity is worth
          the investment. This is why we stand by the principle of identity
          equity--the right to fair opportunity regardless of identity. An
          individual's identity is self-determined but often refers to their
          background. Identity should not be grounds for disqualification,
          rather, an individual’s unique identity is valuable in harboring an
          ecosystem that produces innovation. Companies that lack a diverse
          workforce put at risk the ability to find the proper solution for
          everyone.
        </Text>
      </TextContainer>
    </Container>
  </div>
);

export default AboutUs;
