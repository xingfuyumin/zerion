import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Icon from '../icon/Icon';
import { Drawer } from 'antd-mobile';
import './PageDrawer.less';
import { labelTran } from '../../utils/func';
import { walleticon } from '../../test';

/**
 * 打开或关闭抽屉
 * @param {} setVisible 
 * @param {*} visible 
 * @returns 
 */
const onDrawerVisibleChange = (setVisible, visible) => () => {
  setVisible(visible);
}

const PageDrawer = (props) => {
  const [visible, setVisible] = useState(false);
  const { match: { params: { id, pagekey } } } = props;
  return (
    <span>
      <Icon size={32} type="setting" onClick={onDrawerVisibleChange(setVisible, true)} />
      {
        visible &&
        <Drawer
          open
          position="left"
          onOpenChange={setVisible}
          sidebar={
            <div>
              {
                id &&
                <div className="zerion-walletinfo">
                  <div className="zerion-walletinfo-avatar">
                    <img src={walleticon} alt="" />
                  </div>
                  <div className="zerion-walletinfo-data">
                    <div className="zerion-walletinfo-id">{id}</div>
                    <div className="zerion-walletinfo-money">$59,052,612</div>
                  </div>
                </div>
              }
              {
                id &&
                <div className={`zerion-drawer-listitem ${pagekey === 'overview' ? ' zerion-drawer-active-listitem' : ''}`}>
                  <Icon type="overview" active={pagekey === 'overview'}/>
                  <span>{labelTran('概览')}</span>
                </div>
              }
              {
                id &&
                <div className={`zerion-drawer-listitem ${pagekey === 'history' ? ' zerion-drawer-active-listitem' : ''}`}>
                  <Icon type="history" active={pagekey === 'history'}/>
                  <span>{labelTran('历史')}</span>
                </div>
              }
              <div className={`zerion-drawer-listitem ${pagekey === 'invest' ? ' zerion-drawer-active-listitem' : ''}`}>
                   <Icon type="invest" active={pagekey === 'invest'}/>
                  <span>{labelTran('投资')}</span>
              </div>
              <div className="zerion-drawer-splitline" />
              <div className="zerion-drawer-listitem">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPgo8ZWxsaXBzZSBjeD0iMTIiIGN5PSIxMiIgcng9IjEyIiByeT0iMTIiIGZpbGw9IiNGNzkzMUEiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxyZWN0IHg9Ii01LjMzMjAzIiB5PSItMC4zODA5MiIgd2lkdGg9IjM0LjY2NjciIGhlaWdodD0iMjQuNzYxOSIgcng9IjIuNDc2MTkiIGZpbGw9IndoaXRlIi8+CjxtYXNrIGlkPSJtYXNrMSIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTYiIHk9Ii0xIiB3aWR0aD0iMzYiIGhlaWdodD0iMjYiPgo8cmVjdCB4PSItNS4zMzIwMyIgeT0iLTAuMzgwOTIiIHdpZHRoPSIzNC42NjY3IiBoZWlnaHQ9IjI0Ljc2MTkiIHJ4PSIyLjQ3NjE5IiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazEpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4zMzQ2IC0wLjM4MDkySC01LjMzMjAzVjEuMjY5ODdIMjkuMzM0NlYtMC4zODA5MlpNMjkuMzM0NyAyLjkyMDg4SC01LjMzMTk5VjQuNTcxNjdIMjkuMzM0N1YyLjkyMDg4Wk0tNS4zMzE5OSA2LjIyMjIzSDI5LjMzNDdWNy44NzMwMkgtNS4zMzE5OVY2LjIyMjIzWk0yOS4zMzQ3IDkuNTIzOTlILTUuMzMxOTlWMTEuMTc0OEgyOS4zMzQ3VjkuNTIzOTlaTS01LjMzMTk5IDEyLjgyNTdIMjkuMzM0N1YxNC40NzY1SC01LjMzMTk5VjEyLjgyNTdaTTI5LjMzNDcgMTYuMTI3SC01LjMzMTk5VjE3Ljc3NzhIMjkuMzM0N1YxNi4xMjdaTS01LjMzMTk5IDE5LjQyODdIMjkuMzM0N1YyMS4wNzk1SC01LjMzMTk5VjE5LjQyODdaTTI5LjMzNDcgMjIuNzMwNEgtNS4zMzE5OVYyNC4zODEySDI5LjMzNDdWMjIuNzMwNFoiIGZpbGw9IiNEMDJGNDQiLz4KPHJlY3QgeD0iLTUuMzMyMDMiIHk9Ii0wLjM4MDkyIiB3aWR0aD0iMTQuODU3MSIgaGVpZ2h0PSIxMS41NTU2IiBmaWxsPSIjNDY0NjdGIi8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjI3Mjc4IDIuMDk1MjlDMS4yNzI3OCAyLjU1MTE1IDAuOTAzMjQgMi45MjA2OSAwLjQ0NzM4NiAyLjkyMDY5Qy0wLjAwODQ2ODE1IDIuOTIwNjkgLTAuMzc4MDExIDIuNTUxMTUgLTAuMzc4MDExIDIuMDk1MjlDLTAuMzc4MDExIDEuNjM5NDQgLTAuMDA4NDY4MTUgMS4yNjk5IDAuNDQ3Mzg2IDEuMjY5OUMwLjkwMzI0IDEuMjY5OSAxLjI3Mjc4IDEuNjM5NDQgMS4yNzI3OCAyLjA5NTI5Wk0tMi4wMjg2IDIuMDk1MzRDLTIuMDI4NiAyLjU1MTE5IC0yLjM5ODE0IDIuOTIwNzMgLTIuODUzOTkgMi45MjA3M0MtMy4zMDk4NSAyLjkyMDczIC0zLjY3OTM5IDIuNTUxMTkgLTMuNjc5MzkgMi4wOTUzNEMtMy42NzkzOSAxLjYzOTQ4IC0zLjMwOTg1IDEuMjY5OTQgLTIuODUzOTkgMS4yNjk5NEMtMi4zOTgxNCAxLjI2OTk0IC0yLjAyODYgMS42Mzk0OCAtMi4wMjg2IDIuMDk1MzRaTTMuNzQ4NzQgMi45MjA2OUM0LjIwNDU5IDIuOTIwNjkgNC41NzQxMyAyLjU1MTE1IDQuNTc0MTMgMi4wOTUyOUM0LjU3NDEzIDEuNjM5NDQgNC4yMDQ1OSAxLjI2OTkgMy43NDg3NCAxLjI2OTlDMy4yOTI4OCAxLjI2OTkgMi45MjMzNCAxLjYzOTQ0IDIuOTIzMzQgMi4wOTUyOUMyLjkyMzM0IDIuNTUxMTUgMy4yOTI4OCAyLjkyMDY5IDMuNzQ4NzQgMi45MjA2OVpNNy44NzU4MSAyLjA5NTI5QzcuODc1ODEgMi41NTExNSA3LjUwNjI3IDIuOTIwNjkgNy4wNTA0MSAyLjkyMDY5QzYuNTk0NTYgMi45MjA2OSA2LjIyNTAyIDIuNTUxMTUgNi4yMjUwMiAyLjA5NTI5QzYuMjI1MDIgMS42Mzk0NCA2LjU5NDU2IDEuMjY5OSA3LjA1MDQxIDEuMjY5OUM3LjUwNjI3IDEuMjY5OSA3Ljg3NTgxIDEuNjM5NDQgNy44NzU4MSAyLjA5NTI5Wk0tMS4yMDM2NiA0LjU3MTMzQy0wLjc0NzgwMiA0LjU3MTMzIC0wLjM3ODI1OSA0LjIwMTc4IC0wLjM3ODI1OSAzLjc0NTkzQy0wLjM3ODI1OSAzLjI5MDA3IC0wLjc0NzgwMiAyLjkyMDUzIC0xLjIwMzY2IDIuOTIwNTNDLTEuNjU5NTEgMi45MjA1MyAtMi4wMjkwNSAzLjI5MDA3IC0yLjAyOTA1IDMuNzQ1OTNDLTIuMDI5MDUgNC4yMDE3OCAtMS42NTk1MSA0LjU3MTMzIC0xLjIwMzY2IDQuNTcxMzNaTTIuOTIzNSAzLjc0NTkzQzIuOTIzNSA0LjIwMTc4IDIuNTUzOTYgNC41NzEzMyAyLjA5ODEgNC41NzEzM0MxLjY0MjI1IDQuNTcxMzMgMS4yNzI3MSA0LjIwMTc4IDEuMjcyNzEgMy43NDU5M0MxLjI3MjcxIDMuMjkwMDcgMS42NDIyNSAyLjkyMDUzIDIuMDk4MSAyLjkyMDUzQzIuNTUzOTYgMi45MjA1MyAyLjkyMzUgMy4yOTAwNyAyLjkyMzUgMy43NDU5M1pNNS4zOTk3OCA0LjU3MTMzQzUuODU1NjMgNC41NzEzMyA2LjIyNTE4IDQuMjAxNzggNi4yMjUxOCAzLjc0NTkzQzYuMjI1MTggMy4yOTAwNyA1Ljg1NTYzIDIuOTIwNTMgNS4zOTk3OCAyLjkyMDUzQzQuOTQzOTIgMi45MjA1MyA0LjU3NDM4IDMuMjkwMDcgNC41NzQzOCAzLjc0NTkzQzQuNTc0MzggNC4yMDE3OCA0Ljk0MzkyIDQuNTcxMzMgNS4zOTk3OCA0LjU3MTMzWk03Ljg3NTgxIDUuMzk2OTdDNy44NzU4MSA1Ljg1MjgyIDcuNTA2MjcgNi4yMjIzNyA3LjA1MDQxIDYuMjIyMzdDNi41OTQ1NiA2LjIyMjM3IDYuMjI1MDIgNS44NTI4MiA2LjIyNTAyIDUuMzk2OTdDNi4yMjUwMiA0Ljk0MTEyIDYuNTk0NTYgNC41NzE1NyA3LjA1MDQxIDQuNTcxNTdDNy41MDYyNyA0LjU3MTU3IDcuODc1ODEgNC45NDExMiA3Ljg3NTgxIDUuMzk2OTdaTTMuNzQ4NzQgNi4yMjIzN0M0LjIwNDU5IDYuMjIyMzcgNC41NzQxMyA1Ljg1MjgyIDQuNTc0MTMgNS4zOTY5N0M0LjU3NDEzIDQuOTQxMTIgNC4yMDQ1OSA0LjU3MTU3IDMuNzQ4NzQgNC41NzE1N0MzLjI5Mjg4IDQuNTcxNTcgMi45MjMzNCA0Ljk0MTEyIDIuOTIzMzQgNS4zOTY5N0MyLjkyMzM0IDUuODUyODIgMy4yOTI4OCA2LjIyMjM3IDMuNzQ4NzQgNi4yMjIzN1pNMS4yNzI3OCA1LjM5Njk3QzEuMjcyNzggNS44NTI4MiAwLjkwMzI0IDYuMjIyMzcgMC40NDczODYgNi4yMjIzN0MtMC4wMDg0NjgxNSA2LjIyMjM3IC0wLjM3ODAxMSA1Ljg1MjgyIC0wLjM3ODAxMSA1LjM5Njk3Qy0wLjM3ODAxMSA0Ljk0MTEyIC0wLjAwODQ2ODE1IDQuNTcxNTcgMC40NDczODYgNC41NzE1N0MwLjkwMzI0IDQuNTcxNTcgMS4yNzI3OCA0Ljk0MTEyIDEuMjcyNzggNS4zOTY5N1pNLTIuODU0MjkgNi4yMjIzN0MtMi4zOTg0NCA2LjIyMjM3IC0yLjAyODg5IDUuODUyODIgLTIuMDI4ODkgNS4zOTY5N0MtMi4wMjg4OSA0Ljk0MTEyIC0yLjM5ODQ0IDQuNTcxNTcgLTIuODU0MjkgNC41NzE1N0MtMy4zMTAxNCA0LjU3MTU3IC0zLjY3OTY5IDQuOTQxMTIgLTMuNjc5NjkgNS4zOTY5N0MtMy42Nzk2OSA1Ljg1MjgyIC0zLjMxMDE0IDYuMjIyMzcgLTIuODU0MjkgNi4yMjIzN1pNLTAuMzc4MjU5IDcuMDQ3NjFDLTAuMzc4MjU5IDcuNTAzNDYgLTAuNzQ3ODAyIDcuODczIC0xLjIwMzY2IDcuODczQy0xLjY1OTUxIDcuODczIC0yLjAyOTA1IDcuNTAzNDYgLTIuMDI5MDUgNy4wNDc2MUMtMi4wMjkwNSA2LjU5MTc1IC0xLjY1OTUxIDYuMjIyMjEgLTEuMjAzNjYgNi4yMjIyMUMtMC43NDc4MDIgNi4yMjIyMSAtMC4zNzgyNTkgNi41OTE3NSAtMC4zNzgyNTkgNy4wNDc2MVpNMi4wOTgxIDcuODczQzIuNTUzOTYgNy44NzMgMi45MjM1IDcuNTAzNDYgMi45MjM1IDcuMDQ3NjFDMi45MjM1IDYuNTkxNzUgMi41NTM5NiA2LjIyMjIxIDIuMDk4MSA2LjIyMjIxQzEuNjQyMjUgNi4yMjIyMSAxLjI3MjcxIDYuNTkxNzUgMS4yNzI3MSA3LjA0NzYxQzEuMjcyNzEgNy41MDM0NiAxLjY0MjI1IDcuODczIDIuMDk4MSA3Ljg3M1pNNi4yMjUxOCA3LjA0NzYxQzYuMjI1MTggNy41MDM0NiA1Ljg1NTYzIDcuODczIDUuMzk5NzggNy44NzNDNC45NDM5MiA3Ljg3MyA0LjU3NDM4IDcuNTAzNDYgNC41NzQzOCA3LjA0NzYxQzQuNTc0MzggNi41OTE3NSA0Ljk0MzkyIDYuMjIyMjEgNS4zOTk3OCA2LjIyMjIxQzUuODU1NjMgNi4yMjIyMSA2LjIyNTE4IDYuNTkxNzUgNi4yMjUxOCA3LjA0NzYxWk03LjA1MDQxIDkuNTIzNzJDNy41MDYyNyA5LjUyMzcyIDcuODc1ODEgOS4xNTQxOCA3Ljg3NTgxIDguNjk4MzJDNy44NzU4MSA4LjI0MjQ3IDcuNTA2MjcgNy44NzI5MiA3LjA1MDQxIDcuODcyOTJDNi41OTQ1NiA3Ljg3MjkyIDYuMjI1MDIgOC4yNDI0NyA2LjIyNTAyIDguNjk4MzJDNi4yMjUwMiA5LjE1NDE4IDYuNTk0NTYgOS41MjM3MiA3LjA1MDQxIDkuNTIzNzJaTTQuNTc0MTMgOC42OTgzMkM0LjU3NDEzIDkuMTU0MTggNC4yMDQ1OSA5LjUyMzcyIDMuNzQ4NzQgOS41MjM3MkMzLjI5Mjg4IDkuNTIzNzIgMi45MjMzNCA5LjE1NDE4IDIuOTIzMzQgOC42OTgzMkMyLjkyMzM0IDguMjQyNDcgMy4yOTI4OCA3Ljg3MjkyIDMuNzQ4NzQgNy44NzI5MkM0LjIwNDU5IDcuODcyOTIgNC41NzQxMyA4LjI0MjQ3IDQuNTc0MTMgOC42OTgzMlpNMC40NDczODYgOS41MjM3MkMwLjkwMzI0IDkuNTIzNzIgMS4yNzI3OCA5LjE1NDE4IDEuMjcyNzggOC42OTgzMkMxLjI3Mjc4IDguMjQyNDcgMC45MDMyNCA3Ljg3MjkyIDAuNDQ3Mzg2IDcuODcyOTJDLTAuMDA4NDY4MTUgNy44NzI5MiAtMC4zNzgwMTEgOC4yNDI0NyAtMC4zNzgwMTEgOC42OTgzMkMtMC4zNzgwMTEgOS4xNTQxOCAtMC4wMDg0NjgxNSA5LjUyMzcyIDAuNDQ3Mzg2IDkuNTIzNzJaTS0yLjAyODg5IDguNjk4MzJDLTIuMDI4ODkgOS4xNTQxOCAtMi4zOTg0NCA5LjUyMzcyIC0yLjg1NDI5IDkuNTIzNzJDLTMuMzEwMTQgOS41MjM3MiAtMy42Nzk2OSA5LjE1NDE4IC0zLjY3OTY5IDguNjk4MzJDLTMuNjc5NjkgOC4yNDI0NyAtMy4zMTAxNCA3Ljg3MjkyIC0yLjg1NDI5IDcuODcyOTJDLTIuMzk4NDQgNy44NzI5MiAtMi4wMjg4OSA4LjI0MjQ3IC0yLjAyODg5IDguNjk4MzJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9Ii0zLjY3OTY5IiB5PSIxLjI2OTkiIHdpZHRoPSIxMS41NTU1IiBoZWlnaHQ9IjkuNDkxOTIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxLjIzODEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDYgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iLTMuNjc5NjkiIHkxPSIxLjI2OTkiIHgyPSItMy42Nzk2OSIgeTI9IjkuNTIzNzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjBGMEYwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==" alt=""/>
                  <span>{labelTran('货币')}</span>
              </div>
              <div className="zerion-drawer-listitem">
                  <Icon type="lang" viewBox="0 0 1024 1024"/>
                  <span>{labelTran('语言')}</span>
              </div>
              <div className="zerion-drawer-listitem">
                  <Icon type="theme" viewBox="0 0 1024 1024"/>
                  <span>{labelTran('主题')}</span>
              </div>
            </div>
          }
          className="zerion-page-drawer"
        >
          <></>
        </Drawer>
      }
    </span>
  );
};

export default withRouter(PageDrawer);