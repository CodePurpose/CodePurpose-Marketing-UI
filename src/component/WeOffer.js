import React from "react";
import { SmallContainer, Text, Bold } from "../Styles/StyledComponents";

const primaryLight = "#ffffff";
const secondary = "#00bcd4";

const WeOffer = () => (
  <div style={{ background: primaryLight, paddingTop: "1em" }}>
    <SmallContainer style={{ textAlign: "center" }}>
      <Bold>
        CodePurpose’s team of engineers transcend the outdated industry model.
        We believe in identity equity as the driving force behind innovation.
        Through the diversification of our workforce we’re able to provide
        solutions for your needs.
      </Bold>
    </SmallContainer>
    <div />
    <div style={{ background: primaryLight }}>
      <SmallContainer style={{ padding: "1em" }}>
        <Bold style={{ marginTop: "0" }}>We offer:</Bold>
        <ul style={{ color: secondary }}>
          <li>
            <Text>
              Three types of engineers: interns, contractors, and permanent
              solutions.
            </Text>
          </li>
          <li>
            <Text>
              Engineers with years of experience in the industry to guide your
              choice in language and tools.
            </Text>
          </li>
          <li>
            <Text>
              A standardized model of production to ensure you’re getting what
              you need without wasting a penny more.
            </Text>
          </li>
        </ul>
      </SmallContainer>
    </div>
  </div>
);

export default WeOffer;
