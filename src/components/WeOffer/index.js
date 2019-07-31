import React from "react";
import {
  Text,
  WeOfferBackground,
  WeOfferContainer,
  WeOfferListContainer,
  WeOfferHeader,
  WeOfferUL
} from "../../StyledComponents";

const WeOffer = () => (
  <WeOfferBackground>
    <WeOfferContainer>
      <WeOfferHeader>
        CodePurpose’s team of engineers transcend the outdated industry model.
        We believe in identity equity as the driving force behind innovation.
        Through the diversification of our workforce we’re able to provide
        solutions for your needs.
      </WeOfferHeader>
    </WeOfferContainer>
    <WeOfferListContainer>
      <WeOfferHeader>We offer:</WeOfferHeader>
      <WeOfferUL>
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
            A standardized model of production to ensure you’re getting what you
            need without wasting a penny more.
          </Text>
        </li>
      </WeOfferUL>
    </WeOfferListContainer>
  </WeOfferBackground>
);

export default WeOffer;
