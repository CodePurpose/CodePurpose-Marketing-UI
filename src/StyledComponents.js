import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discussion from "./images/discussion.jpg";
import computer from "./images/computer.jpg";
import backgroundOne from "./images/backgroundOne.jpg";

// colors*********************************
const primary = "#fafafa";
const primaryLight = "#ffffff";
const secondary = "#00bcd4";
const black = "#212121";
const lighterBlack = "#666666";

//text************************************
export const Text = styled.p`
  color: ${lighterBlack};
`;

export const TextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

//Backdrop********************************
export const BackdropStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

//Containers***********************************

export const Container = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: ${primaryLight}
  width: 300px;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 480px) {
    height: auto;
    align-self: center;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

//icons********************************************
export const IconMobile = styled(FontAwesomeIcon)`
  align-self: center;

  ${props => {
    if (props.type === "mobile") {
      return `display: none;`;
    }
  }}

  @media (max-width: 480px) {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    ${props => {
      if (props.type === "right") {
        return `transform: rotate(90deg); `;
      } else if (props.type === "left") {
        return `transform: rotate(-90deg); `;
      } else if (props.type === "mobile") {
        return `display: block;`;
      }
    }}
  }
`;

//AboutUs Styles *************************************************

export const AboutUsBackground = styled.div`
  background: ${primary};
  padding-bottom: 1em;
`;

export const AboutUsContainer = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const AboutUsHeader = styled.h1`
  color: ${secondary};
`;

export const AboutUsHeaderTwo = styled.h3`
  color: ${black};
  margin-top: 0;
`;

export const AboutUsTextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  alignself: center;
`;

export const AboutUsText = styled.p`
  color: ${lighterBlack};
  margin-top: 0;
`;

//Discussion Styles *************************************************

export const DiscussionBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${discussion});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 150px;
  padding-bottom: 150px;
`;
export const DiscussionContainer = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
`;
export const DiscussionTextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
`;

//HireUs Styles *******************************************************

export const HireUsBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${computer});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const HireUsContainer = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const HireUsTextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
`;

//ProductionModel Styles *************************************************

export const ProductionModelBackground = styled.div`
  background: ${primary};
`;

export const ProductionModelContainer = styled.div`
  max-width: 1090px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2em;
`;

export const ProductionModelTitle = styled.h2`
  color: ${black};
  text-align: center;
  padding: 0.5em;
`;

export const PMCardContent = styled.div`
  padding: 1em 1.25em;
  text-align: center;
`;

export const ProductionModelHeader = styled.h3`
  color: ${black};
`;

export const ProductionMobileOnly = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    margin: 1em;
  }
`;
export const MobileOnlyArrow = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CenterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;
  max-width: 830px;
  margin: auto;

  @media (max-width: 480px) {
    display: none;
  }
`;

//Title Styles **********************************************************
export const TitleBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${backgroundOne});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 250px;
  padding-bottom: 250px;
`;

export const TitleContainer = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  padding: 0.5em;
`;

//WeOffer Styles *********************************************************

export const WeOfferBackground = styled.div`
  background: ${primaryLight};
  padding-top: 1em;
`;

export const WeOfferContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const WeOfferListContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

export const WeOfferHeader = styled.h3`
  color: ${black};
`;

export const WeOfferUL = styled.ul`
  color: ${secondary};
`;
