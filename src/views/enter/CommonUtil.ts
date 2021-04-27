/**
 * 工具类
 *@author kyy
 *@date 2021/4/16 10:57
 */
export class CommonUtil {
  
  /**
   * 获取url中传的参数 url带#
   * @param {string} name
   * @return {any}
   */
  public static getQueryString(name: string) {
    const searchList = window.location.href.split('?');
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    if (!searchList[1]) { return null; }
    const url = searchList[1].replace(/\%20/g, '+');
    const r = url.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
    return null;
  }

  public static succeed() {
    let second = 3;
    const jump = document.getElementById('jump') as any;
    jump.innerHTML = second + '秒后跳转登录页';
    const checkTime = setInterval(function () {
      second--;
      if (second >= 0) {
        jump.innerHTML = second + '秒后跳转登录页';
      } else {
        clearInterval(checkTime);
        second = 3;
      }
    }, 1000);
  }
}
