// import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import { Home } from "../Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { ThemeContext } from '../../utils/ThemeContext';
import { useState } from 'react';
import config from '../../utils/config';
import Todos from "../Todos/Todos";
import Counter from "../Counter/Counter";
import CounterViaContext from "../CounterViaContext/CounterViaContext";
import CounterViaUseState from "../CounterViaUseState/CounterViaUseState";
import CounterViaUseStateAndClasses from "../CounterViaUseStateAndClasses/CounterViaUseStateAndClasses";
import styles from './App.module.scss';

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
            <ul className="myLinks">
              <li>
                <NavLink activeClassName={styles.selectedNavItem} exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/feedbacks">Feedbacks</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/todos">Todos</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/counter">Counter</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/counterViaContext">Counter Via Context</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/counterViaUseState">Counter Via useState</NavLink>
              </li>
              <li>
                <NavLink activeClassName={styles.selectedNavItem} to="/counterViaUseStateAndClasses">Counter Via useState and Classes</NavLink>
              </li>
            </ul>
          </nav>
          <NavLink to="" data-theme="light" onClick={changeTheme}>Light</NavLink>
          <br />
          <NavLink to="" data-theme="dark" onClick={changeTheme}>Dark</NavLink>

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
              <CounterViaUseState theme={theme} />
            </Route>
            <Route path="/counterViaUseStateAndClasses">
              <CounterViaUseStateAndClasses />
            </Route>
            <Route path="/counterViaUseStateAndClasses">
              <CounterViaUseStateAndClasses />
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
