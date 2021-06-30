import React from 'react';
import './Header.css';
import { NavBar } from 'antd-mobile';
import Icon from '../icon/Icon';

const Header = (props) => {
  <div className="zerion-header">
    <NavBar
      leftContent={<Icon size={32} type="setting"/>}
      rightContent
    />
  </div>
};

export default Header;