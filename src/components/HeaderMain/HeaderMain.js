import '../HeaderMain/HeaderMain.css';
import headerLogo from '../../images/header-logo.svg';
import burgerMenuIcon from '../../images/burger-menu.svg';

function HeaderMain() {
    return (
        <div className="main-header">
            <img className="landing__logo" src={headerLogo} alt="Логотип" />
            <img className="main-header__menu" src={burgerMenuIcon} alt="Меню" />
        </div>
    )
}

export default HeaderMain;