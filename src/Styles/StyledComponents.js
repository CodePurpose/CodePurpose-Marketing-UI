import styled from "styled-components";
//NavBar

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export const NavLinks = styled.a`
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

// Footer styles

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

  @media (min-width: 375px) and (max-width: 480px) {
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

  @media (min-width: 375px) and (max-width: 480px) {
    margin: 0;
    padding-top: 0em;
    padding-bottom: 1em;
  }
`;

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
//Container*****************************

export const Container = styled.div`
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
`;

export const SmallContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
