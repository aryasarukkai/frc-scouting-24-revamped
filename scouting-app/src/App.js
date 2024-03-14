import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Setup from './components/Setup';
import TeamInfo from './components/TeamInfo';
import Auton from './components/Auton';
import Teleop from './components/Teleop';

const App = () => {
  return (
    <Router>
      <div>
        <div className="header">
          <img src="logo.png" alt="Logo" length="80px" width="80px" />
          <h1>649 Scouting <br /><code>V3 • DEMO</code></h1>
        </div>
        <h1>FRC Crescendo</h1>

        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/setup" component={Setup} />
          <Route path="/team-info" component={TeamInfo} />
          <Route path="/auton" component={Auton} />
          <Route path="/teleop" component={Teleop} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;