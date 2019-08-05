import styled from "styled-components";

// Colors*********************************
const primary = "#fafafa";
const secondary = "#00bcd4";
const secondaryDark = "#008ba3";
const black = "#212121";
const lighterBlack = "#666666";

//Code of Conduct Modal *********************************************************
export const ConductBackdrop = styled.div`
position fixed; 
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 100;
overflow: auto;
background-color: rgba(0, 0, 0, .3);
`;
export const ConductModal = styled.div`
z-index: 200; 
overflow: auto; 
background: ${primary}
max-width: 925px;
margin: 1em auto;
box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);

@media(max-width: 480px){
  margin: 1em .25em;
}
`;

export const ConductContent = styled.div`
  max-width: 700px;
  margin: 4em auto;

  @media (max-width: 480px) {
    padding: 0 1em;
    margin 2em auto;
  }
`;

export const ConductCloseBtn = styled.button`
  background-color: ${secondary};
  border: none;
  border-radius: 5px;
  padding: 1em 2em;
  align-item: center;
  margin: 0 auto;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  :hover {
    color: white;
    background-color: ${secondaryDark};
    cursor: pointer;
  }
`;

export const ConductBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const ConductCloseX = styled.div`
  float: right;
  margin: 0.5em 1em;
  font-size: 2.5em;
  cursor: pointer;

  :hover {
    color: red;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ConductText = styled.p`
  color: ${lighterBlack};
`;

export const ConductTitle = styled.h2`
  text-align: center;
  color: ${black};

  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const ConductHeader = styled.h3`
  color: ${black};
`;
