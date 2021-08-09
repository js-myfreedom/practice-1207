// import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import { Home } from "../Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeContext } from '../../utils/ThemeContext';
import { useState } from 'react';
import config from '../../utils/config';
import Todos from "../Todos/Todos";
import Counter from "../Counter/Counter";
import CounterViaContext from "../CounterViaContext/CounterViaContext";
import CounterViaUseState from "../CounterViaUseState/CounterViaUseState";

function App() {

  const [theme, setTheme] = useState(config.defaultTheme);

  const changeTheme = (evt) => {
    evt.preventDefault();
    const theme = evt.target.dataset.theme;
    setTheme(theme);
  }

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/feedbacks">Feedbacks</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/counterViaContext">Counter Via Context</Link>
              </li>
              <li>
                <Link to="/counterViaUseState">Counter Via useState</Link>
              </li>
            </ul>
          </nav>
          <Link to="" data-theme="light" onClick={changeTheme}>Light</Link>
          <br />
          <Link to="" data-theme="dark" onClick={changeTheme}>Dark</Link>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/feedbacks">
              <Feedbacks />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/counterViaContext">
              <CounterViaContext />
            </Route>
            <Route path="/counterViaUseState">
              <CounterViaUseState />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
