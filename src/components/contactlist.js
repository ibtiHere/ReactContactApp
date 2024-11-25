import React from 'react';
import ContactCard from './contactcard';

const Contactlist = (props) => {
    const renderContactList = props.contacts.map((contact) => (
        <ContactCard
            key={contact.id}
            contact={contact}
            deleteContactHandler={props.deleteContactHandler}
        />
    ));

    return <div className='ui celled list'>{renderContactList}</div>;
};

export default Contactlist;
