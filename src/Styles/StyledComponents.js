import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// colors*********************************
const darkerGrey = "#34373a";
const primaryLight = "#ffffff";

//text************************************
export const Text = styled.p`
  color: #00000099;
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
  color: white;
  background: black;
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
  color: white;
  font-size: 1rem;
  padding-left: 10px;

  :hover {
    color: orange;
  }

  :active {
    color: orange;
  }
`;

export const MenuIcon = styled.a`
  align-self: center;
  margin-right: 1em;
  text-decoration: none;
  :active {
    color: orange;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  height: 250px;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
  background: ${darkerGrey};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  transform: translateY(-100%);
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
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const MenuList = styled.li`
  padding-top: 0.5em;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  :hover {
    color: orange;
  }

  :active {
    color: orange;
  }
`;

// Footer styles*****************************

export const FooterBackground = styled.div`
  background: black;
  height: 250px;
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
  color: white;
  font-size: 1rem;

  :hover {
    color: orange;
  }

  :active {
    color: orange;
  }
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

export const CardContent = styled.div`
  padding: 1em 1.25em;
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
        return `transform: rotate(90deg);`;
      } else if (props.type === "left") {
        return `transform: rotate(-90deg);`;
      } else if (props.type === "mobile") {
        return `display: block; align-self: center`;
      }
    }}
  }
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    margin: 1em;
  }
`;
