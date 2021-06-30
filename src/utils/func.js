/**
 * 获取localstorage
 * @param {*} name 
 * @param {*} defaultVal 出错备用返回结果
 */
export const getLocal = (name, defaultVal) => {
    const val = window.localStorage.getItem(name);
    try {
        return typeof val === 'string' ? JSON.parse(val) : val;
    } catch (err) {
        console.error(err);
        return defaultVal;
    }
};

/**
 * 设置localstorage
 * @param {*} name 
 * @param {*} val
 */
export const setLocal = (name, val) => {
    window.localStorage.setItem(name, JSON.stringify(val));
};

/**
 * 多语言翻译函数
 */
export const labelTran = (id) => {
    return id;
}