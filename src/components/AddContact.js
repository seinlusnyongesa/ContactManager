import { useState } from 'react';

function AddContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const add = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert('the fields cannot be empty');
            return;
        }

        props.addContactsHandler({ name, email });
        setName('');
        setEmail('');
        props.history.push('/');
    };

    return (
        <div>
            <h3>add contact</h3>
            <form onSubmit={add}>
                <div>
                    <label>fullname:</label>
                    <input
                        type="text"
                        placeholder="full names"
                        name="fullname"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>email:</label>
                    <input
                        type="text"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddContact;
