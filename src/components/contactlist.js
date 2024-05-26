import React from "react";
import Contactcard from "./contactcard";

const Contactlist = (props) => {
    const rendercontactlist = props.contacts.map((contact) => {
        return (
            <Contactcard contact={contact} key={contact.id} />

        );
    });

    return (
        <div className="ui celled list">
            {rendercontactlist}
        </div>

    );
}

export default Contactlist;
