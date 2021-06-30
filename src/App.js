import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/nav/Header';

const App = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="zerion-layout" style={{ '--background-color': 'black', '--text-color': 'white', backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <Header />
      <div className="zerion-content">
        <Router>
          <Route path="/">
            <Redirect to="/overview" />
          </Route>
          <Route path="/overview" sensitive exact component={null} />
          <Route path="/history" sensitive exact component={null} />
          <Route path="/invest" sensitive exact component={null} />
        </Router>
      </div>
    </div>
  );
}

export default App;
