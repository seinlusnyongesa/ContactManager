import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
    const { name, email } = props.location.state.contact;
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </div>
            <div>
                <Link to="/">
                    <button>back to contack list</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;
