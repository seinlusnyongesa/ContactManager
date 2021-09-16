import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';

function App() {
    const [contacts, setContacts] = useState([]);

    const addContactsHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
    };
    useEffect(() => {
        const retrieved = JSON.parse(localStorage.getItem('contacts'));
        setContacts(retrieved);
    }, []);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <ContactList
                                {...props}
                                contacts={contacts}
                                getContactId={removeContactHandler}
                            />
                        )}
                    />
                    <Route
                        path="/add"
                        exact
                        render={(props) => (
                            <AddContact {...props} addContactsHandler={addContactsHandler} />
                        )}
                    />

                    <Route
                        path="/contact/:id"
                        exact
                        render={(props) => <ContactDetail {...props} />}
                    />
                </Switch>
                {/* <AddContact addContactsHandler={addContactsHandler} />
                <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
            </Router>
        </div>
    );
}

export default App;
