import headerButtonStyles from './header-button.module.css';
import PropTypes from 'prop-types';

function HeaderButton(props) {
  return (
    <button type='button' className={headerButtonStyles.container}>
      {props.children}
    </button>
  );
}

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderButton;

