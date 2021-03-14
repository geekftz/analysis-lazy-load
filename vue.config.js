/*
 * @Author: hackftz
 * @Date: 2021-03-11 19:00:39
 * @LastEditTime: 2021-03-11 19:00:46
 * @LastEditors: hackftz
 * @Description:
 * @FilePath: /lazy-load-analysis/vue.config.js
 */

module.exports = {
  chainWebpack: config => {
    config.optimization.minimize(false);
  },
};
