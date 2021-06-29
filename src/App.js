import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'; 

const App = () => {
  useEffect(() => {
    
  }, []);
  return (
    <Router>
      <Route path="/">
        <Redirect to="/overview" />
      </Route>
      <Route path="/overview" sensitive exact component={null} />
      <Route path="/history" sensitive exact component={null} />
      <Route path="/invest" sensitive exact component={null} />
    </Router>
  );
}

export default App;
