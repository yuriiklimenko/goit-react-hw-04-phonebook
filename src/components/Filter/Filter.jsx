import PropTypes from 'prop-types';
import Input from 'components/UI/Input/Input';
import css from './Filter.module.css';

const Filter = ({ filterContacts, value }) => {
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find Contacts by name</label>
      <Input onChange={filterContacts} value={value} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
