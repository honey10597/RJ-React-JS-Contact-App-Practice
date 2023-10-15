import React from "react";
import fbIcon from "../images/fbIcon.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  console.log(props, "propsprops");
  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={fbIcon}
        alt="fbIcon"
        style={{ height: "30px", width: "30px" }}
      />
      <div className="content">
        <Link
          // to={"/contact/" + props?.contact?.id}
          to={`/contact/${props?.contact?.id}`}
          state={{ contact: props.contact }}
        >
          <div className="header">{props.contact.name}</div>
          <div>{props.contact.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{
          color: "red",
          marginTop: "7px"
        }}
        onClick={() => props.clickHandler(props?.contact?.id)}
      />
    </div >
  );
};

export default ContactCard;
