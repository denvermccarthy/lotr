import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';
import Films from './views/Films/Films';
import Main from './views/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/books">
          <Books />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
