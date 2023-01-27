import '../Footer/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__content">
                <div className="footer__links-container">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                </div>
                <p className="footer__copyright">&copy; {(new Date).getFullYear()} </p>
            </div>
        </footer>
    )
}

export default Footer;
