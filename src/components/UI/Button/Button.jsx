import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={css.btn}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
};
