import React from "react";
import {
  HireUsBackground,
  HireUsContainer,
  HireUsTextContainer
} from "../Styles/StyledComponents";

const HireUs = () => (
  <HireUsBackground>
    <HireUsContainer>
      <h3>Are you looking to hire your own team of engineers?</h3>
      <HireUsTextContainer>
        <p style={{ marginTop: "0" }}>
          Our solutions extend to more than just our custom software.
          CodePurpose was founded on the principle of innovation and
          opportunity. We provide top-quality engineers looking to fill your
          needs whether that means internships, contract projects, or permanent
          solutions. Our vast pool of engineers come from varied backgrounds but
          share the same objective of providing innovation and superior builds.
        </p>
      </HireUsTextContainer>
    </HireUsContainer>
  </HireUsBackground>
);

export default HireUs;
