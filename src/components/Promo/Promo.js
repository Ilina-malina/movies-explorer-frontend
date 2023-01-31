import '../Promo/Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__content">
                <img className="promo__image" src={landingLogo} alt="Логотип" />
                <div className="promo__info-container">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__istruction">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
            </div>
            <button className="promo__button" type="submit" aria-label="Узнать больше">Узнать больше</button>
        </section>
    )
}

export default Promo;