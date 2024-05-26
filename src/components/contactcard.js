import React from "react";
import User from "../images/149071.png";

const Contactcard = (props) => {
    const { id, name, email } = props.contact;

    const deleteContactHandler = () => {
        console.log("Delete button clicked for contact ID:", id);
        props.getContactId(id);
    }

    return (
        <div className="item">
            <img className="ui avatar image" src={User} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
                style={{ color: "red", marginLeft: "auto" }}
                onClick={deleteContactHandler}>
            </i>
        </div>
    );
}

export default Contactcard;
