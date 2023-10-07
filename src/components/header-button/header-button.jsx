import headerButtonStyles from './header-button.module.css';
import { childrenPropType } from '../../utils/prop-types';

function HeaderButton(props) {
  return (
    <button type='button' className={headerButtonStyles.container}>
      {props.children}
    </button>
  );
}

HeaderButton.propTypes = childrenPropType;

export default HeaderButton;

