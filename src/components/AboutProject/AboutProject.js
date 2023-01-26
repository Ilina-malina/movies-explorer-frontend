import '../AboutProject/AboutProject.css';

function AboutProject() {
    return (
        <section className="project">
            <h3 className="project__title">О проекте</h3>
            <div className="project__info-container">
                <h4 className="project__info-title">Дипломный проект включал 5 этапов</h4>
                <p className="project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="project__info-container">
                <h4 className="project__info-title">На выполнение диплома ушло 5 недель</h4>
                <p className="project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="project__time">
                <p className="project__backend-time">1 неделя</p>
                <p className="project__frontend-time">4 недели</p>
                <p className="project__backend">Back-end</p>
                <p className="project__frontend">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;