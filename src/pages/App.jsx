import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from '../components/nav/Header';
import './App.less';

const App = () => {
  useEffect(() => {

  }, []);
  return (
    <div className="zerion-layout">
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
