import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

// colors*********************************
const primary = "#fafafa";
const secondary = "#00bcd4";
const black = "#212121";

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
  color: ${black};
  background: ${primary};
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.5);
`;

export const NavTitle = styled.p`
  align-self: center;
  font-size: 2rem;
  margin-left: 2rem;
  color: ${secondary};
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

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: ${black};
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
  color: ${black};
  :active {
    color: ${secondary};
  }
  @media (min-width: 480px) {
    display: none;
  }
`;
