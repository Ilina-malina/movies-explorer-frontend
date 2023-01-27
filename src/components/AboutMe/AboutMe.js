import '../AboutMe/AboutMe.css';
import studentPhoto from "../../images/student_photo.jpeg";

function AboutMe() {
    return (
        <section className="about-me">
            <h3 className="about-me__title">Студент</h3>
            <div className="about-me__content">
                <img className="about-me__image" src={studentPhoto} alt="Студент" />
                <div className="about-me__container">
                    <p className="about-me__name">Виталий</p>
                    <p className="about-me__brief">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__github-link" href="https://github.com/Ilina-malina">Github</a>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;