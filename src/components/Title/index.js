import React from "react";
import { TitleBackground, TitleContainer } from "../../StyledComponents";

const Title = () => (
  <TitleBackground id="home">
    <TitleContainer>
      <h2>
        We are
        <span style={{ fontSize: "150%" }}> CodePurpose </span>a one-stop dev
        shop for custom software solutions. We build original, top-quality
        software and fill the gaps for companies looking to outsource their tech
        team.
      </h2>
    </TitleContainer>
  </TitleBackground>
);

export default Title;
