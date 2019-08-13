import React from "react";
import { withFormik } from "formik";
import {
  ContactForm,
  ContactInput,
  ContactTextArea,
  ErrorMsg,
  ContactBackground,
  ContactUsBtn,
  ContactFormContainer,
  ContactUsTitle,
  ContactCloseBtn
} from "./contactUsStyle";
import SubmitConfirm from "./submitConfirm";

const ContactUs = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  return (
    <ContactBackground>
      <ContactFormContainer>
        {isSubmitting ? (
          <SubmitConfirm click={props.click} />
        ) : (
          <div>
            <ContactUsTitle>Contact Us</ContactUsTitle>
            <ContactForm onSubmit={handleSubmit}>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="firstName">First Name: </label>
                      <ContactInput
                        type="text"
                        id="firstName"
                        placeholder="Jane"
                        name="firstName"
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      {errors.firstName && touched.firstName && (
                        <ErrorMsg>{errors.firstName}</ErrorMsg>
                      )}
                    </td>
                    <td>
                      <label htmlFor="lastName">Last Name:</label>
                      <ContactInput
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {errors.lastName && touched.lastName && (
                        <ErrorMsg>{errors.lastName}</ErrorMsg>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Phone:</label>
                      <ContactInput
                        type="text"
                        placeholder="(123) 123-4567"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {errors.phone && touched.phone && (
                        <ErrorMsg>{errors.phone}</ErrorMsg>
                      )}
                    </td>
                    <td>
                      <label>Email:</label>
                      <ContactInput
                        type="text"
                        placeholder="jane-doe@example.com"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <ErrorMsg>{errors.email}</ErrorMsg>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <label>Message:</label>
              <ContactTextArea
                type="text"
                onChange={handleChange}
                name="msg"
                row="5"
                value={values.msg}
                onBlur={handleBlur}
              />
              {errors.msg && touched.msg && <ErrorMsg>{errors.msg}</ErrorMsg>}
              <br />
              <ContactUsBtn type="submit">Submit</ContactUsBtn>
              <ContactCloseBtn
                style={{ marginLeft: "2em" }}
                onClick={props.click}
              >
                Exit
              </ContactCloseBtn>
            </ContactForm>
          </div>
        )}
      </ContactFormContainer>
    </ContactBackground>
  );
};

const EnhancedWithFormik = withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    msg: ""
  }),

  validate: values => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(values.phone)) {
      errors.phone = "Invalid number";
    }

    if (!values.msg) {
      errors.msg = "Required";
    }

    return errors;
  },

  handleSubmit: values => {
    setTimeout(() => {
      let data = "";
      for (let key in values) {
        data = `${data} \`${key}\`: ${values[key]}`;
      }
      const body = JSON.stringify({ text: data });
      const url =
        "https://hooks.slack.com/services/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";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body
      })
        .then(res => res.json())
        .then(response => console.log("Success:", JSON.stringify(response)))
        .catch(error => console.error("Error:", error));
    }, 1000);
  },

  displayName: "ContactForm"
})(ContactUs);

export default EnhancedWithFormik;
