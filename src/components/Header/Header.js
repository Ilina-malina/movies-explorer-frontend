import '../../components/Header/Header.css';
import { Route, Link } from "react-router-dom";
import LandingHeader from '../LandingHeader/LandingHeader.js';
import HeaderMain from '../HeaderMain/HeaderMain';

function Header() {
    return (
    <header className="header">
        <Route exact path="/">
            <LandingHeader />
        </Route>
        <Route path="/movies">
            <HeaderMain />
        </Route>
    </header>
    )
}

export default Header;