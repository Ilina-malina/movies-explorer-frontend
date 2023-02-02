import '../Movies/Movies.css';
import Preloader from '../Preloader/Preloader.js';
import SearchForm from '../SearchForm/SearchForm.js';

function Movies() {
    return(
    <section className="movies">
        <SearchForm />
        <Preloader />
    </section>
    )
}

export default Movies;