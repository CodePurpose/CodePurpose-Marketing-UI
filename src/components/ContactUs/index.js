import React from "react";
import { withFormik } from "formik";
import {
  ContactForm,
  ContactInput,
  ContactTextArea,
  ErrorMsg,
  ContactBackground,
  ContactUsBtn
} from "./contactUsStyle";

const ContactUs = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <ContactBackground>
      <h1>Contact Us</h1>
      <ContactForm onSubmit={handleSubmit}>
        <tr style={{ width: "100%" }}>
          <td>
            <lable>First Name:</lable>
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
            <label>Last Name:</label>
            <ContactInput
              type="text"
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
      </ContactForm>
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

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "ContactForm"
})(ContactUs);

export default EnhancedWithFormik;
