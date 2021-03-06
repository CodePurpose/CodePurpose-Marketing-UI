import styled from "styled-components";

// const primaryColor = "#fafafa";
const primaryLight = "#ffffff";
const primaryDark = "#c7c7c7";
const secondary = "#00bcd4";
const secondaryDark = "#008ba3";
const red = "#e54e66";
const redDark = "#b32940";
const black = "#212121";
const lighterBlack = "#666666";

export const ContactBackground = styled.div`
position fixed; 
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 100;
background-color: rgba(0, 0, 0, .3);
`;

export const ContactUsTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
  color: ${black};
`;

export const ContactFormContainer = styled.div`
  z-index: 200;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  background-color: ${primaryLight};
  padding: 3rem;
  border-radius: 6px;

  -webkit-box-shadow: 12px 23px 35px -10px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 12px 23px 35px -10px rgba(0, 0, 0, 0.31);
  box-shadow: 12px 23px 35px -10px rgba(0, 0, 0, 0.31);

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
    margin-top: 100px;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
`;

export const ContactInput = styled.input`
  margin: 8px 0;
  padding: 0.5em 1em;
  border-radius: 5px;
  border: 1px solid ${primaryDark}
  box-sizing: border-box;
  width: 100%
`;

export const ContactTextArea = styled.textarea`
margin: 8px 0;
width: 100%
height: 150px;
box-sizing: border-box;

padding: 1em;
border-radius: 6px;
border-color: ${primaryDark}
`;

export const ErrorMsg = styled.div`
  color: ${red};
  margin-bottom: 1rem;
`;

export const ContactUsBtn = styled.button`
background-color: ${secondary};
width: 100px;
color: white;
border: none;
border-radius: 5px;
padding: 1em;
margin-top: 1em;
margin-right: 1em
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
box-shadow: 0 24px 48px -10px rgba(0, 188, 212, 0.35);
 :hover {
  cursor: pointer;
  background-color: ${secondaryDark};
  `;

export const ContactCloseBtn = styled.button`
background-color: ${red};
width: 100px;
color: white;
border: none;
border-radius: 5px;
padding: 1em;
-webkit-transition-duration: 0.4s;
transition-duration: 0.4s;
box-shadow: 0 24px 48px -10px rgba(229, 78, 102, 0.35);
 :hover {
  cursor: pointer;
  background-color: ${redDark};
  `;

export const ContactUsTable = styled.table`
  width: 100%;
`;

export const ConfirmSecondaryTxt = styled.p`
  color: ${lighterBlack};
`;
