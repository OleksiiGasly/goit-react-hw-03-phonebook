import PropTypes from 'prop-types';
import { Item, Button } from './List.styled';

export const Contact = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

// export default Contact
