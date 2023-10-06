import headerButtonStyles from './header-button.module.css';

function HeaderButton(props) {
  return (
    <button type='button' className={headerButtonStyles.container}>
      {props.children}
    </button>
  );
}

export default HeaderButton;