import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderConatctList = props.conatcts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui celled list">{renderConatctList}</div>;
};

export default ContactList;
