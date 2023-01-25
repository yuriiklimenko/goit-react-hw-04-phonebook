import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from 'components/UI/Button/Button';
import Input from 'components/UI/Input/Input';
import css from './Form.module.css';
import InputTel from 'components/UI/Input/InputTel';

class Form extends Component {
  static propTypes = {
    create: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onSubmitClick = e => {
    e.preventDefault();
    this.props.create(this.state);
    this.setState({ name: '', number: '' });
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitClick} className={css.form}>
        <label className={css.label}>Name</label>
        <Input onChange={this.inputChange} value={this.state.name} />
        <label className={css.label}>Number</label>
        <InputTel onChange={this.inputChange} value={this.state.number} />
        <Button>Add contact</Button>
      </form>
    );
  }
}

export default Form;
