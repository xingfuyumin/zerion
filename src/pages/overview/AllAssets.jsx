import React from 'react';
import './AllAssets.less';
import { testData1 as data } from '../../test';
import { useState } from 'react';

const AllAssets = () => {
  const [showAll, setShowAll] = useState(false);
  const newData = showAll ? data : data.slice(0, 3);
  return (
    <div className="zerion-allassets">
      <div>
        <div>所有资产</div>
        <div>Equity</div>
      </div>
      <div>
      {
        newData.map((item, index) => (
          <div key={String(index)}>
            <img src={item.d1} alt="" />
            <div>
              <div>
                <span>{item.d2}</span>
                <span>{item.d3}</span>
              </div>
              <div>{item.d4}</div>
            </div>
            <div>
              <div>{item.d5}</div>
              <div>{item.d6}</div>
            </div>
          </div>
        ))
      }
      </div>
      {
        !showAll &&
        (
          <div>
            <span onClick={() => setShowAll(true)}>显示所有资产</span>
          </div>
        )
      }
    </div>
  );
};

export default AllAssets;