import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import discussion from "../images/discussion.jpg";
import computer from "../images/computer.jpg";

// colors*********************************
const primary = "#fafafa";
const primaryLight = "#ffffff";
const secondary = "#00bcd4";
const textPrimary = "#000000";
const black = "#212121";
const lighterBlack = "#666666";

//text************************************
export const Text = styled.p`
  color: #666666;
`;

export const Bold = styled.h3`
  color: #212121;
`;

export const TextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;
//NavBar**********************************
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  color: ${textPrimary};
  background: ${primary};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
`;

export const NavTitle = styled.p`
  align-self: center;
  font-size: 2rem;
  margin-left: 2rem;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-right: 2rem;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const NavLinks = styled.a`const FontAwesomeIcon = ({ className, children }) => (
  <svg className={className}>{children}</svg>
);
  text-decoration: none;
  color: ${textPrimary};
  font-size: 1rem;
  padding-left: 10px;

  :hover {
    color: ${secondary};
  }

  :active {
    color: ${secondary};
  }
`;

export const MenuIcon = styled.a`
  align-self: center;
  margin-right: 1em;
  text-decoration: none;
  color: ${textPrimary};
  :active {
    color: ${secondary};
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  height: 250px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
  background: ${primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transform: translateY(-105%);
  transition: transform 0.3s ease-out;

  ${props =>
    props.open
      ? `
      transform: translateY(0);
    `
      : null}
`;

export const BackdropStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

export const MenuList = styled.li`
  padding-top: 0.5em;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: ${textPrimary};
  font-size: 1.5em;
  :hover {
    color: ${secondary};
  }

  :active {
    color: ${secondary};
  }
`;

// Footer styles*****************************

export const FooterBackground = styled.div`
  background: ${primaryLight};
  height: 175px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 250px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    margin-right: 1em;
  }
`;

export const FooterList = styled.div`
  display: flex;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  padding-top: 2em;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
    padding-top: 0em;
    padding-bottom: 1em;
  }
`;
//used in footer &
export const Item = styled.a`
  text-decoration: none;
  color: ${textPrimary};
  font-size: 1rem;

  :hover {
    color: ${secondary};
  }

  :active {
    color: ${secondary};
  }
`;
//Containers***********************************

export const Container = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
`;

export const SmallContainer = styled.div`
  max-width: 700px;
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

//Careers Styles ************************************************

export const CareersBackground = styled.div`
  background: ${primary};
  padding-bottom: 2em;
`;

export const CareersContainer = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const CareersHeader = styled.h1`
  color: ${secondary};
`;

export const CareersHeaderTwo = styled.h3`
  color: ${black};
  margin-top: 0;
`;

export const CareersTextContainer = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  alignself: center;
`;

export const CareersText = styled.p`
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
  alignself: center;
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
  alignself: center;
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
