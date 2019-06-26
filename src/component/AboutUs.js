import React from "react";
import { Container } from "../Styles/StyledComponents";

const secondary = "#00bcd4";

const AboutUs = () => (
  <Container style={{ textAlign: "center" }}>
    <h1 style={{ color: secondary }}>ABOUT US</h1>
    <h3>WHO ARE WE</h3>
    <p>
      We are a group of innovators, developers, and moonlighters pushing for
      change in an industry lacking inclusion. We believe diversity is worth the
      investment. This is why we stand by the principle of identity equity--the
      right to fair opportunity regardless of identity. An individual's identity
      is self-determined but often refers to their background. Identity should
      not be grounds for disqualification, rather, an individual’s unique
      identity is valuable in harboring an ecosystem that produces innovation.
      Companies that lack a diverse workforce put at risk the ability to find
      the proper solution for everyone.
    </p>
  </Container>
);

export default AboutUs;
