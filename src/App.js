import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fourohfour from './pages/Fourohfour';
import Home from './pages/Home';
import About from './pages/About';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/challenges">
            <Challenges />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route>
            <Fourohfour />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
