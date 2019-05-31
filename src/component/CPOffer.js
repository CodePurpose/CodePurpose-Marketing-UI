import React from "react";
import { Container, SmallContainer } from "../Styles/StyledComponents";

const lighterGrey = "#e1e3e8";

const styles = {
  headerStyle: {
    textAlign: "center",
    padding: "2em",
    color: "white"
  }
};

const CPOffer = () => (
  <div style={{ background: "black" }}>
    <Container>
      <div style={styles.headerStyle}>
        <h3>
          CodePurpose’s team of engineers transcend the outdated industry model.
          We believe in identity equity as the driving force behind innovation.
          Through the diversification of our workforce we’re able to provide
          solutions for your needs.
        </h3>
      </div>
    </Container>
    <div />
    <div
      style={{
        background: `${lighterGrey}`
      }}
    >
      <SmallContainer style={{ padding: "1em" }}>
        <h3 style={{ marginTop: "0" }}>We offer:</h3>
        <ul>
          <li>
            <p>
              Three types of engineers: interns, contractors, and permanent
              solutions.
            </p>
          </li>
          <li>
            <p>
              Engineers with years of experience in the industry to guide your
              choice in language and tools.
            </p>
          </li>
          <li>
            <p>
              A standardized model of production to ensure you’re getting what
              you need without wasting a penny more.
            </p>
          </li>
        </ul>
      </SmallContainer>
    </div>
  </div>
);

export default CPOffer;
