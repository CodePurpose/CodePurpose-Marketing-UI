import styled from "styled-components";

// Colors***************************************************************************
const primary = "#fafafa";
const secondary = "#00bcd4";
const secondaryDark = "#008ba3";
const black = "#212121";
const lighterBlack = "#666666";

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
  align-self: center;
`;

export const CareersText = styled.p`
  color: ${lighterBlack};
  margin-top: 0;
`;

// Code of Conduct Button ***********************************************************
export const ViewConductBtn = styled.button`
background-color: ${secondary};
color: white;
border: none;
border-radius: 5px;
padding: 1em;
margin: 2em auto;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
box-shadow: 0 24px 48px -10px rgba(0, 188, 212, 0.35);

:hover {
  cursor: pointer;
  background-color: ${secondaryDark};
  `;
