/**
 *
 *@author kyy
 *@date 2021/4/16 15:08
 */

import {BaseViewModel} from '../../../viewmodel/BaseViewModel';
export class GetBackPasswordViewModel extends BaseViewModel {

    // 焦点在账号框中样式
    accountActive = false;
    // 焦点在四位数字验证码中样式
    codeActive = false;

    // 焦点在账号框中时，边框颜色变化
    phoneFocus() {
        this.accountActive = true;
    }

    // 焦点在验证码框时
    codeFocus() {
        this.codeActive = true;

    }


    // 账号框失去焦点时，将手机号格式改为344格式
    phoneBlur() {
        const phone = document.getElementById('phone-text') as any ;
        this.accountActive = false;
        if (phone.value.length === 11) {
            const newphone = phone.value.split('');
            newphone.splice(3, 0, ' ');
            newphone.splice(8, 0, ' ');
            phone.value = newphone.join('');
        }
    }

    // 验证码框失去焦点时
    codeBlur() {
        this.codeActive = false;
    }


    // 点击获取验证码
    getVlCode() {
        let second = 60;
        const getViCode = document.getElementById('fetch-code') as any;
        getViCode.innerHTML = second + '秒后可重发';
        getViCode.style.color = '#999999';
        const timeKeeping = setInterval(function () {
            second--;
            if (second > 0) {
                getViCode.innerHTML = second + '秒后可重发';
                getViCode.style.pointerEvents = 'none';
            } else {
                clearInterval(timeKeeping);
                getViCode.innerHTML = '重新获取验证码';
                getViCode.style.pointerEvents = 'auto';
                getViCode.style.color = '#FE5702';
                second = 60;
            }
        }, 1000);
    }

    // 点击下一步按钮
    next() {
        // 调用账号验证
        if (this.accountVerify() === false) {
            return;
        }

        // 调用验证码验证
        if (this.codeVerity() === false) {
            return;
        }

        this.$emit('nextStep');
    }

        //    1.账号验证
        accountVerify() {
            const checkonline = document.getElementById('checkonline') as any ;
            const phone = document.getElementById('phone-text') as any ;


            // (1)判断账号框是否为空，若为空，提示“请输入手机号”
            if (phone.value === '') {
                checkonline.innerHTML = '请输入手机号';
                return false;
            }
            // (2)若不为空判断输入的手机号首字符是否为1 或 手机号是否为11位，若不满足要求，提示“请输入正确手机号”
            if (phone.value.length !== 13 || phone.value.charAt(0) !== '1') {
                checkonline.innerHTML = '请输入正确手机号';
                return false ;
            }
            // (3)验证手机号,判断输入的手机号是否为纯数字
            // tslint:disable-next-line:max-line-length
            if (!phone.value.match(/^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\s\d{4}\s\d{4}$/)) {
                checkonline.innerHTML = '请输入正确手机号';
                return false;
            }
            // （4）判断账号是否已经注册，若没有注册，提示“账号密码输入错误”

            // (5)都不满足以上条件时，提示位置为空
            checkonline.innerHTML = '';
            return true;
        }

        //    2.验证码验证
        codeVerity() {
            const code = document.getElementById('code-text') as any;
            const checkonline = document.getElementById('checkonline') as any ;

            // （1）判断验证码框是否为空，若为空，提示请输入验证码
            if (code.value === '' || code.value.length !== 4) {
                checkonline.innerHTML = '请输入正确验证码';
                return false;
            }

            //  （2)  判断输入的验证码是否与收到的验证码相等，若不相等，提示验证码输入错误

            // （3）判断验证码是否已经过期，若过期，提示验证码已过期，请重新获取

            //   （4）都不满足以上条件，提示为空
            checkonline.innerHTML = '';
            return true;

        }


    // 点击返回按钮
    back() {
        console.log('返回');
        this.$emit('getBackPasswordBack');
    }

    // 点击右上角叉号退出
    close() {
        console.log('退出');
    }
}
