import React from "react";

import ContctField from "../contactField/ContctField";
import Form from "../form/Form";

import ContactsStyle from "./contacts.module.css";

const ContactsSection = () => {
  return (
    <div className={ContactsStyle.container}>
      <p className={ContactsStyle.title}>
        We are always in touch and will be happy to resolve any of your
        questions.
      </p>
      <Form />
      <ContctField />
    </div>
  );
};

export default ContactsSection;
