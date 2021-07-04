import React, { useMemo } from 'react';
import './Icon.less';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    /*  
    icon-right  icon-eye  icon-touzilicai icon-piechart icon-zhuti icon-Forbidden
    icon-baseline-menu-px  icon-baseline-search-px  icon-copy  icon-fenxiang
    icon-down  icon-yuyan  icon-lishi  icon-direction_up_down  icon-plus  icon-swap
    icon-right1  icon-right2  icon-fl-baobiao
    */
    '//at.alicdn.com/t/font_2649738_1nsjoi0pf7w.js',
  ],
});

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
    <IconFont
      style={{ fontSize: size }}
      type={type}
      className={`zerion-icon${active ? ' zerion-active-icon' : ''}`}
      onClick={onClick}
    />
  );
}
export default Icon;