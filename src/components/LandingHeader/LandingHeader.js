import '../LandingHeader/LandingHeader.css';
import headerLogo from '../../images/header-logo.svg';
import { Link } from "react-router-dom";

function LandingHeader() {
    return (
        <div className="landing">
            <img className="landing__logo" src={headerLogo} alt="Логотип" />
            <div className="landing__container">
                <Link className="landing__link" to="/signup">
                    Регистрация
                </Link>
                <button className="landing__signin" type="button" aria-label="Войти">Войти</button>
            </div>
        </div>
    )
}

export default LandingHeader;