import React from 'react';
import './PledgedAssets.less';
import { testData2 as data } from '../../test';

/**
 * 已质押资产
 */
const PledgedAssets = () => {
  return (
    <div className="zerion-pledgedassets">
      <div>已质押资产</div>
      <div>总值</div>
      <div>{data.d1}</div>
      <div>
        {
          data.d2.map((item, index) => (
            <div key={String(index)}>
              <div>{item.d1}</div>
              <div>
                {
                  item.d2.map((subItem, subIndex) => (
                    <div key={String(subIndex)}>
                      <img src={subItem.d1} alt="" />
                      <div>{subItem.d2}</div>
                      <div>{subItem.d3}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PledgedAssets;