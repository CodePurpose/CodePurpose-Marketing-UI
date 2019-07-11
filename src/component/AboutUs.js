import React from "react";
import {
  AboutUsContainer,
  AboutUsBackground,
  AboutUsText,
  AboutUsHeaderTwo,
  AboutUsHeader,
  AboutUsTextContainer
} from "../Styles/StyledComponents";

const AboutUs = () => (
  <AboutUsBackground>
    <AboutUsContainer>
      <AboutUsHeader>ABOUT US</AboutUsHeader>
      <AboutUsHeaderTwo>WHO ARE WE</AboutUsHeaderTwo>
      <AboutUsTextContainer>
        <AboutUsText>
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
        </AboutUsText>
      </AboutUsTextContainer>
    </AboutUsContainer>
  </AboutUsBackground>
);

export default AboutUs;
