/**
 *
 *@author kyy
 *@date 2021/4/16 15:09
 */

import {BaseViewModel} from '../../../viewmodel/BaseViewModel';
export class SetNewPasswordViewModel extends BaseViewModel {


    // 控制修改密码成功的显示隐藏
    isShow = true;
    // 焦点在密码框中样式
    passwordActive = false;
    // 焦点在二次密码框中样式；
    passwordAgain = false;

    // 点击完成按钮
    finish() {

        // 调用密码验证
        if (this.passwordVerify() === false) {
            return;
        }
        // 再次输入密码
        if (this.inputAgain() === false) {
            return;
        }

        // 控制修改密码成功的显示隐藏
        this.isShow = false;
    }

    // 焦点在密码框中
    passwordFocus() {
        this.passwordActive = true;
    }

    // 焦点在二次密码框中
    passwordAgainFocus() {
        this.passwordAgain = true;
    }

    // 密码框失焦
    passwordBlur() {
        this.passwordActive = false;
    }

    // 二次密码框失焦
    passwordAgainBlur() {
        this.passwordAgain = false;
    }

        //    1.密码验证
        passwordVerify() {
            const checkonline = document.getElementById('checkonline') as any;
            const password = document.getElementById('password-text') as any;


            //    （1）if语句判断密码框是否为空，若为空，提示“请输入密码”
            if (password.value === '') {
                checkonline.innerHTML = '请输入密码';
                return false;
            }

            // （2）判断密码是否是6-16位字母和数字，若不是，提示“请输入6-16位密码”
            if (password.value.length < 6 || password.value.length > 16) {
                checkonline.innerHTML = '请输入6-16位密码';
                return false;
            }
            // （3)判断密码框中值的长度是否等于characterCountVrify()for循环中返回的count，不等于即表示含特殊字符，判断密码是否包含特殊字符，若包含，提示“请不要输入特殊字符”
            if (!password.value.match(/^[a-z0-9A-Z]+$/)) {
                checkonline.innerHTML = '请不要输入特殊字符';
                return false;
            }
            //   ( 4)判断密码是否已经注册，若没有注册，提示“密码输入错误”

            // (5) 都不满足以上条件，则密码验证成功
            checkonline.innerHTML = '';
            return true;
        }

        // 2.再次输入密码
        inputAgain() {
            const password = document.getElementById('password-text') as any;
            const again = document.getElementById('input-again') as any;
            const checkonline = document.getElementById('checkonline') as any;
            // 再次输入密码框为空
            if (again.value === '') {
                checkonline.innerHTML = '请再次输入密码';
                return false;
            }
            // 两次输入密码不同
            if (again.value !== password.value) {
                checkonline.innerHTML = '两次密码输入不同';
                return false;
            }
            checkonline.innerHTML = '';
            return true;
        }

    // 点击返回箭头
    back() {
        console.log('返回');
        this.$emit('setNewBack');
    }

    // 点击右上角叉号退出
    close() {
        console.log('退出');
    }
}
