import React from 'react';
import './Header.less';
import { NavBar } from 'antd-mobile';
import Icon from '../icon/Icon';
import Search from '../search/Search';

const Header = (props) => {
  return (
    <div className="zerion-header">
      <NavBar
        leftContent={<Icon size={32} type="setting" />}
        rightContent={<Search />}
      />
    </div>
  );
};

export default Header;