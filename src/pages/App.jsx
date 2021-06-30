import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.less';
import Home from './home/Home';

const App = () => {
  useEffect(() => {

  }, []);
  return (
    <Router>
      <Route path="/" sensitive exact component={Home} />
      <Route path="/:pagekey/:id?" sensitive exact component={Home} />
      {/* <Route path="/overview" sensitive exact component={null} />
    <Route path="/history" sensitive exact component={null} />
    <Route path="/invest" sensitive exact component={null} /> */}
    </Router>
  );
}

export default App;
