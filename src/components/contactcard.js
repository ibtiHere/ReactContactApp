import React from "react";
import User from "../images/149071.png";

const ContactCard = (props) => {
    console.log("Props in ContactCard:", props); // Check props

    const { id, name, email } = props.contact;

    const deleteContactHandler = () => {
        if (typeof props.deleteContactHandler === "function") {
            props.deleteContactHandler(id);
        } else {
            console.error("deleteContactHandler is not a function!");
        }
    };

    return (
        <div className="item">
            <img className="ui avatar image" src={User} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginLeft: "auto" }}
                onClick={deleteContactHandler}
            ></i>
        </div>
    );
};


export default ContactCard;
