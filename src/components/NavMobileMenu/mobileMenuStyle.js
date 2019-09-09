import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

// colors*********************************
const primary = "#fafafa";
const secondary = "#00bcd4";
const black = "#212121";

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

export const MenuList = styled.li`
  padding-top: 0.5em;
`;

export const MenuUL = styled.ul`
  list-style: none;
  text-align: center;
  padding-left: 0;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: ${black};
  font-size: 1.5em;
  :hover {
    color: ${secondary};
  }

  :active {
    color: ${secondary};
  }
`;
