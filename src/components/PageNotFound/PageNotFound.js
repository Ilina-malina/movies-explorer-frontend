import '../PageNotFound/PageNotFound.css';
import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <section className="notFound__page">
            <p className="notFound__error">404</p>
            <p className="notFound__message">Страница не найдена</p>
            <NavLink to="/" className="notFound__link">
                Назад
            </NavLink>
        </section>
    )
}

export default PageNotFound;