import React, { useState }  from 'react';
import Icon from '../icon/Icon';
import { Modal, SearchBar } from 'antd-mobile';
import './Search.less';
import { labelTran } from '../../utils/func';

/**
 * 打开或关闭对话框
 * @param {} setVisible 
 * @param {*} visible 
 * @returns 
 */
const onModelVisibleChange = (setVisible, visible) => () => {
  setVisible(visible);
}

const Search = () => {
  const [visible, setVisible] = useState(false);
  return (
    <span>
      <Icon type="icon-baseline-search-px" onClick={onModelVisibleChange(setVisible, true)}/>
      <Modal
        visible={visible}
        animationType="slide-down"
        className="zerion-search-modal"
      >
        <SearchBar
          placeholder={labelTran('搜索代币、池和金库')}
          onCancel={onModelVisibleChange(setVisible, false)}
          showCancelButton
          cancelText="取消"
        />
        <div className="zerion-search-result">
          开始输入以搜索资产
        </div>
      </Modal>
    </span>
  )
}

export default Search;