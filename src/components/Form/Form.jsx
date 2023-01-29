import PropTypes from 'prop-types';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import css from './Form.module.css';
import InputTel from 'components/UI/Input/InputTel';
import { useState } from 'react';

function Form({ create }) {
  const [newContact, setNewContact] = useState({ name: '', number: '' });

  const onSubmitClick = e => {
    e.preventDefault();
    create(newContact);
    setNewContact({ name: '', number: '' });
  };

  const inputChange = e => {
    const { name, value } = e.currentTarget;
    setNewContact({ ...newContact, [name]: value });
  };

  return (
    <form onSubmit={onSubmitClick} className={css.form}>
      <label className={css.label}>Name</label>
      <Input onChange={inputChange} value={newContact.name} />
      <label className={css.label}>Number</label>
      <InputTel onChange={inputChange} value={newContact.number} />
      <Button>Add contact</Button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  create: PropTypes.func.isRequired,
};
