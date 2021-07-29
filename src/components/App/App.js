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

function App() {

  const [theme, setTheme] = useState(config.defaultTheme);

  const changeTheme = (value) => {
    setTheme(value);
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
            </ul>
          </nav>
          <Link onClick={() => changeTheme('light')}>Light</Link>
          <br/>
          <Link onClick={() => changeTheme('dark')}>Dark</Link>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/feedbacks">
              <Feedbacks />
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
