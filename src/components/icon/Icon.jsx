import React from 'react';
import { useMemo } from 'react';
import icons from './icons';

/**
 * 自定义图标
 * size 大小
 * type 图标类型
 * @param {}} props 
 * @returns 
 */
const Icon = (props) => {
  const {
    size = 24, type,
  } = props;
  return (
    <svg width={String(size)} height={String(size)} style="fill: var(--text-color)">
      {
        icons[type].map(item => (
          <path d={item}></path>
        ))
      }
    </svg>
  );
}
export default Icon;