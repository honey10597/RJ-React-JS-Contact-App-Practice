import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

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

  return (
    <div class="main">

      <br />
      <br />

      <h2 style={{
        color: 'red'
      }}>Contact List</h2>
      <Link to={"/add"}>
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list">{renderConatctList}</div>
    </div>
  )
};

export default ContactList;
