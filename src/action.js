/**
 * 更新redux中的内容
 * @param {*} obj 
 * @returns 
 */
export const updateReduxState = obj => (
  type: 'UPDATE_STATE',
  meta: obj || {},
);