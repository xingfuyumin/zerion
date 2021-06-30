import React from 'react';
import { withRouter } from 'react-router';
import './Home.less';
import Header from '../../components/nav/Header';

const Home = () => {
  return (
    <div className="zerion-layout">
      <Header />
      <div className="zerion-content">

      </div>
    </div>
  );
};

export default withRouter(Home);