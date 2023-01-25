import PropTypes from 'prop-types';
import Button from 'components/UI/Button/Button';
import css from './ContactItem.module.css';

const ContactItem = ({ contact, remove }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>{contact.name}: </p>
      <p className={css.tel}>{contact.number}</p>
      <Button onClick={() => remove(contact.id)} className={css.btn}>
        Delete
      </Button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  remove: PropTypes.func.isRequired,
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
