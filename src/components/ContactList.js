import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });
    return (
        <>
            <h3>contact list</h3>
            <Link to="/add">
                <button>Add contact</button>
            </Link>
            {renderContactList}
        </>
    );
}

export default ContactList;
