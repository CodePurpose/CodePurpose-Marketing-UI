import React from "react";
import { ContactCloseBtn } from "./contactUsStyle";

const submitCofirm = props => {
  return (
    <div>
      <h1>Thank you!</h1>
      <p>
        Your message has been successfully sent. We will contact you very soon!
      </p>
      <ContactCloseBtn onClick={props.click}>close</ContactCloseBtn>
    </div>
  );
};
export default submitCofirm;
