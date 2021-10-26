import PropTypes from 'prop-types';
import { Contact } from './Contact';
import { List } from './List.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          name={contact.name}
          number={contact.number}
          onClick={() => onDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
