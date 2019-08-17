import styled from "styled-components";

// colors*********************************
const primaryLight = "#ffffff";
const secondary = "#00bcd4";
const black = "#212121";

export const FooterBackground = styled.div`
  background: ${primaryLight};
  height: 175px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 250px;
  }
`;

export const FooterTitle = styled.p`
  font-size: 2em;
  color: ${secondary};
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

export const FooterUl = styled.ul`
  list-style: none;
  padding-top: 2em;
  color: ${black};
  @media (max-width: 480px) {
    margin: 0;
    padding-top: 0em;
    padding-bottom: 1em;
  }
`;
export const FooterItem = styled.p`
  text-decoration: none;
  font-size: 1rem;
  margin-top: 0;

  :hover {
    color: ${secondary};
    cursor: pointer;
  }

  :active {
    color: ${secondary};
  }
`;
