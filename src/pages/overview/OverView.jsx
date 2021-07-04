import React from 'react';
import { withRouter } from 'react-router';
import Icon from '../../components/icon/Icon';
import './OverView.less';
import MoneyLineChart from '../../components/chart/MoneyLineChart';
import AllAssets from './AllAssets';
import PledgedAssets from './PledgedAssets';
import PolygonChain from './PolygonChain';

const OverView = (props) => {
  return (
    <div className="zerion-overview">
      <div className="zerion-total-block">
        <div>
          <div>
            <span>$59,003,001</span>
            <Icon type="icon-piechart" size={16} />
          </div>
          <div>+0.04% ($22,262.86)</div>
        </div>
        <div>
          <Icon type="icon-plus" size={16} />
          <span>购买加密货币</span>
        </div>
      </div>
      <MoneyLineChart />
      <AllAssets />
      <PledgedAssets />
      <PolygonChain />
    </div>
  );
};

export default withRouter(OverView);