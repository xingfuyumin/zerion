import React from 'react';
import './History.less';
import { testData3 } from '../../test';
import { useState } from 'react';
import Icon from '../../components/icon/Icon';
import { SearchBar } from 'antd-mobile';

const renderHistoryOverview = (item, index, shows, setShows, parentIndex) => (
  <div
    key={String(index)}
    className={`zerion-history-overview${shows[`${parentIndex}-${index}`] ? ' zerion-history-overview-border' : ''}`}
    onClick={() => {
      shows[`${parentIndex}-${index}`] = !shows[`${parentIndex}-${index}`];
      setShows({ ...shows });
    }}
  >
    <div>
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMjMuNSAxMkMyMy41IDE4LjM1MTMgMTguMzUxMyAyMy41IDEyIDIzLjVDNS42NDg3MyAyMy41IDAuNSAxOC4zNTEzIDAuNSAxMkMwLjUgNS42NDg3MyA1LjY0ODczIDAuNSAxMiAwLjVDMTguMzUxMyAwLjUgMjMuNSA1LjY0ODczIDIzLjUgMTJaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyNEMxOC42Mjc0IDI0IDI0IDE4LjYyNzQgMjQgMTJDMjQgNS4zNzI1OCAxOC42Mjc0IDAgMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRaIiBmaWxsPSIjRjNGM0Y0Ii8+CjxwYXRoIGQ9Ik03LjY0MTc1IDExQzE2LjIxMDIgMTEgMTQuODEgMTAuOTk5OSAxNi44MTIzIDEwLjk5OThDMTcuMDYyNiAxMC43NDc5IDE3LjA2MjYgMTAuMTUzOSAxNi44MTIzIDkuOTAxOTlMMTQuMjQ3MyA3LjE4ODkyQzEzLjk5NyA2LjkzNzAzIDEzLjU5MjcgNi45MzcwMyAxMy4zNDI0IDcuMTg4OTJDMTMuMjIyMyA3LjMwOTYgMTMuMTU0NyA3LjQ3MzQzIDEzLjE1NDcgNy42NDQyN0MxMy4xNTQ3IDcuODE1MTIgMTMuMjIyMyA3Ljk3ODk1IDEzLjM0MjQgOC4wOTk2M0wxNC44MSA5LjcwODIyTDcuNjQxNzUgOS43MDgyMkM3LjI4ODc5IDkuNzA4MjIgNyA5Ljk5ODg3IDcgMTAuMzU0MUM3IDEwLjcwOTMgNy4yODg3OSAxMSA3LjY0MTc1IDExWiIgZmlsbD0iIzE1MTUxRiIvPgo8cGF0aCBkPSJNMTYuMzU4MyAxM0M3Ljc4OTgzIDEzIDkuMTg5OTYgMTMuMDAwMSA3LjE4NzcxIDEzLjAwMDJDNi45Mzc0MyAxMy4yNTIxIDYuOTM3NDMgMTMuODQ2MSA3LjE4NzcxIDE0LjA5OEw5Ljc1MjcgMTYuODExMUMxMC4wMDMgMTcuMDYzIDEwLjQwNzMgMTcuMDYzIDEwLjY1NzYgMTYuODExMUMxMC43Nzc3IDE2LjY5MDQgMTAuODQ1MyAxNi41MjY2IDEwLjg0NTMgMTYuMzU1N0MxMC44NDUzIDE2LjE4NDkgMTAuNzc3NyAxNi4wMjEgMTAuNjU3NiAxNS45MDA0TDkuMTg5OTYgMTQuMjkxOEwxNi4zNTgzIDE0LjI5MThDMTYuNzExMiAxNC4yOTE4IDE3IDE0LjAwMTEgMTcgMTMuNjQ1OUMxNyAxMy4yOTA3IDE2LjcxMTIgMTMgMTYuMzU4MyAxM1oiIGZpbGw9IiMxNTE1MUYiLz4KPC9nPgo8L3N2Zz4K" alt="" />
      <span>{item.d1}</span>
      <span>{item.d2}</span>
    </div>
    <div>
      <div>
        <img src={item.d3} alt="" />
        <div>
          <div>
            <span>{item.d4}</span>
            <span>{item.d41}</span>
          </div>
          <div>{item.d5}</div>
        </div>
      </div>
      <Icon type="icon-right1" size={16} />
      <div>
        <img src={item.d6} alt="" />
        <div>
          <div>{item.d7}</div>
          <div>{item.d8}</div>
        </div>
      </div>
    </div>
    {
      shows[`${parentIndex}-${index}`] && (
        <div className="zerion-history-detail">
          <div className="zerion-history-detailblock">
            <div>已发送</div>
            <div className="zerion-history-detailitem">
              <img src={item.d3} alt="" />
              <div>
                <div>
                  <span>{item.d4}</span>
                  <span>{item.d41}</span>
                </div>
                <div>{item.d5}</div>
              </div>
            </div>
          </div>
          <div className="zerion-history-detailblock">
            <div>已接收</div>
            <div className="zerion-history-detailitem">
              <img src={item.d9} alt="" />
              <div>
                <div>
                  <span>{item.d10}</span>
                  <span>{item.d101}</span>
                </div>
                <div>{item.d11}</div>
              </div>
            </div>
            <div className="zerion-history-detailitem">
              <img src={item.d12} alt="" />
              <div>
                <div>
                  <span>{item.d13}</span>
                  <span>{item.d131}</span>
                </div>
                <div>{item.d14}</div>
              </div>
            </div>
          </div>
          <div className="zerion-history-detailblock">
            <div>至</div>
            <div className="zerion-history-detailwallet">
              <img src={item.d15} alt=""/>
              <span>{item.d16}</span>
            </div>
          </div>
          <div>
            <div>
              <div>费用</div>
              <div>{item.d17}</div>
            </div>
            <div>
              <div>交易哈希</div>
              <div>{item.d18}</div>
            </div>
            <div>
              <Icon type="icon-copy" size={14} />
              <Icon type="icon-fenxiang" size={14} />
            </div>
          </div>
        </div>
      )
    }
  </div>

);

const renderHistoryItem = (item, index, shows, setShows) => (
  <div key={String(index)} className="zerion-history-item">
    <div>{item.d1}</div>
    <div>
      {
        item.d2.map((subItem, subIndex) => renderHistoryOverview(subItem, subIndex, shows, setShows, index))
      }
    </div>
  </div>
);


const History = () => {
  const [shows, setShows] = useState({});
  const [data, setData] = useState(testData3);
  return (
    <div className="zerion-history">
      <div>
        <div>历史</div>
        <div>下载CSV</div>
        <div>计算税收</div>
      </div>
      <div>
        <SearchBar
          placeholder={'按地址、协议、资产进行过滤'}
          cancelText="取消"
        />
      </div>
      <div>
        {
          data.map((item, index) => renderHistoryItem(item, index, shows, setShows))
        }
      </div>
      <div onClick={() => setData([...data, ...testData3])}>更多交易</div>
    </div>
  );
};

export default History;