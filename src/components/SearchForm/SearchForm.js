import '../SearchForm/SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input 
                    className="search__input"
                    required
                    type="text"
                    placeholder="Фильм"
                />
                <button className="search__button" type="button" aria-label="Найти">Найти</button>
            </form>
            <FilterCheckbox />

        </section>
    )
}

export default SearchForm;