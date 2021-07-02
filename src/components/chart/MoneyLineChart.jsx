import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { getTestData } from '../../test';
import './MoneyLineChart.less';
import { Chart } from '@antv/g2';

const types = {
  'hour': '1H',
  'day': '1D',
  'week': '1W',
  'month': '1M',
  'year': '1Y',
};

const changeType = (setType, key, ref, setLoading) => () => {
  setType(key);
  setLoading(true);
  const data = getTestData(key, 2000);
  setLoading(false);
  ref.current.data = data;
  const chart = ref.current.chart;
  chart.changeData(data);
};


const initChart = (setType, type, ref, setLoading) => {
  const chart = new Chart({
    container: 'zerion-linechart-container',
    autoFit: true,
    height: 200,
  });
  chart.scale({
    money: {
      type: 'quantize',
    },
  });
  chart.line().position('date*momey').color('#00ff00');;
  chart.axis(false);
  chart.tooltip({
    title: (title, datum) => {
      return datum['value'];
    },
    crosshairs: {
      type: 'xy',
    },
    showCrosshairs: true,
  });
  chart.data([]);
  chart.render();
  ref.current.chart = chart;
  changeType(setType, type, ref, setLoading)();
};

const MoneyLineChart = () => {
  const [type, setType] = useState('hour');
  let ref = useRef({ chart: null, data: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => initChart(setType, type, ref, setLoading), [1]);
  return (
    <div className="zerion-linechart">
      <div>投资组合表现</div>
      <div id="zerion-linechart-container"></div>
      <div>
        {
          Object.keys(types).map(key => (
            <div key={key}>
              <span className={key === type ? 'active' : ''} onClick={changeType(setType, key, ref, setLoading)}>
                {types[key]}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default MoneyLineChart;