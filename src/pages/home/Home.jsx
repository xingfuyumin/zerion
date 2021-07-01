import React from 'react';
import { withRouter } from 'react-router';
import './Home.less';
import Header from '../../components/nav/Header';
import OverView from '../overview/OverView';

const Home = (props) => {
  const { match: { params: { id, pagekey } } } = props;
  return (
    <div className="zerion-layout">
      <Header />
      <div className="zerion-content">
        {
          pagekey === 'overview' &&
          <OverView />
        }
      </div>
    </div>
  );
};

export default withRouter(Home);