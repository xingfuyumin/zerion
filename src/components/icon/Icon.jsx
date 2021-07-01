import React from 'react';
import icons from './icons';
import './Icon.less';

/**
 * 自定义图标
 * size 大小
 * type 图标类型
 * @param {}} props 
 * @returns 
 */
const Icon = (props) => {
  const {
    size = 24, type, onClick, active, viewBox,
  } = props;
  return (
    <span className={`zerion-icon${active ? ' zerion-active-icon' : ''}`} onClick={onClick}>
      <svg width={String(size)} height={String(size)} viewBox={viewBox}>
        {
          icons[type].map((item, index) => {
            if (item.shape === 'path') {
              return (<path d={item.d} key={String(index)} style={item.style}></path>);
            }
            if (item.shape === 'circle') {
              return (<circle cx={item.cx} cy={item.cy} r={item.r} key={String(index)} style={item.style}></circle>);
            }
            if (item.shape === 'rect') {
              return (<rect key={String(index)} style={item.style} transform={item.transform}></rect>);
            }
            return <></>;
          })
        }
      </svg>
    </span>
  );
}
export default Icon;