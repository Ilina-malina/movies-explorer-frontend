import '../Portfolio/Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__projects">
                <div className="portfolio__project">
                    <h2 className="portfolio__project-name">Статичный сайт</h2>
                    <a className="portfolio__project-link" href="*" target="_blank" rel="noreferrer">↗</a>
                </div>
                <div className="portfolio__project">
                    <h2 className="portfolio__project-name">Адаптивный сайт</h2>
                    <a className="portfolio__project-link" href="*" target="_blank" rel="noreferrer">↗</a>
                </div>
                <div className="portfolio__project">
                    <h2 className="portfolio__project-name">Одностраничное приложение</h2>
                    <a className="portfolio__project-link" href="*" target="_blank" rel="noreferrer">↗</a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;