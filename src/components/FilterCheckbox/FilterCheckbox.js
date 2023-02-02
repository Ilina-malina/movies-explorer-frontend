import '../FilterCheckbox/FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <section className="checkbox">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" />
            </label>
            <p className="checkbox__name">Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;