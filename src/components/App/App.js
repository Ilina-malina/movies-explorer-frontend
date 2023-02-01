import './App.css';
import { Route } from "react-router-dom";

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/123">
        <PageNotFound />
      </Route>
    </div>
  );
}

export default App;
