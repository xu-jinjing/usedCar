/**
 *
 *@author kyy
 *@date 2021/4/19 9:16
 */
import {BaseViewModel} from '../../../viewmodel/BaseViewModel';
export class RegistrationSucceedViewModel extends BaseViewModel {

      mounted() {
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
