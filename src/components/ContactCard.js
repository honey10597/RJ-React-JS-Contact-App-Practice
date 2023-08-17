import React from "react";
import fbIcon from "../images/fbIcon.png";

const ContactCard = (props) => {
  console.log(props, "propsprops");
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={fbIcon}
        style={{ height: "30px", width: "30px" }}
      />
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <div>{props.contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px",
        }}
        onClick={() => alert("Delete Pressed!")}
      />
    </div>
  );
};

export default ContactCard;
