import React from 'react';
import './Header.less';
import { NavBar } from 'antd-mobile';
import Search from '../search/Search';
import PageDrawer from '../drawer/PageDrawer';

const Header = (props) => {
  return (
    <div className="zerion-header">
      <NavBar
        leftContent={<PageDrawer />}
        rightContent={<Search />}
      />
    </div>
  );
};

export default Header;