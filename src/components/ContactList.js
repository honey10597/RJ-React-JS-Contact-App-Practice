import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    console.log(id, "ididid");
    props.getContactId(id)
  }

  const renderConatctList = props.contacts.map((contact) => {
    return <ContactCard
      key={props.contacts.id}
      contact={contact}
      clickHandler={deleteContactHandler}
    />;
  });

  return <div className="ui celled list">{renderConatctList}</div>;
};

export default ContactList;
