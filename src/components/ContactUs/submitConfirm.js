import React from "react";
import { ContactCloseBtn, ConfirmSecondaryTxt } from "./contactUsStyle";

const submitCofirm = props => {
  return (
    <div>
      <h1>Thank you!</h1>
      <h3>
        Your message has been successfully sent. We will contact you very soon!
      </h3>
      <ConfirmSecondaryTxt>
        If this is urgent or you need to contact us for additional information
        please contact
        <a href="mailto:admin@codepurpose.io"> admin@codepurpose.io</a>
      </ConfirmSecondaryTxt>
      <ContactCloseBtn onClick={props.click}>close</ContactCloseBtn>
    </div>
  );
};
export default submitCofirm;
