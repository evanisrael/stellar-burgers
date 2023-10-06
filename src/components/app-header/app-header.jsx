import appHeaderStyles from './app-header.module.css';
import HeaderButton from '../header-button/header-button';
import { Logo, ProfileIcon, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={appHeaderStyles.header}>
      <nav className={appHeaderStyles.container}>
        <div className={appHeaderStyles.menu}>
          <HeaderButton>
            <BurgerIcon type="primary" />
            <p className={`text text_type_main-default ${appHeaderStyles.text} ${appHeaderStyles.active}`}>Конструктор</p>
          </HeaderButton>
          <HeaderButton>
            <ListIcon type="secondary" />
            <p className={`text text_type_main-default ${appHeaderStyles.text}`}>Лента заказов</p>
          </HeaderButton> 
        </div>
          <div className={appHeaderStyles.logo}>
            <Logo />
          </div>
          <div className={appHeaderStyles.profile}>
            <HeaderButton>
              <ProfileIcon type="secondary" />
              <p className={`text text_type_main-default ${appHeaderStyles.text}`}>Личный кабинет</p>
            </HeaderButton>
          </div>
      </nav>
    </header>
  );
}

export default AppHeader;