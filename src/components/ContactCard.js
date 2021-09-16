import { Link } from 'react-router-dom';
function ContactCard(props) {
    const { id, name, email } = props.contact;
    return (
        <div>
            <div>
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div>{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <button onClick={() => props.clickHandler(id)}>remove</button>
        </div>
    );
}

export default ContactCard;
