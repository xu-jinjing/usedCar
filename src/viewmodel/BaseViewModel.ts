/**
 * 基类
 *@author kyy
 *@date 2021/4/1 15:08
 */
import {Vue} from 'vue-class-component';

export class BaseViewModel extends Vue {
    pageNo = 1;
    pageSize = 20;
    pageCount = 1;
    keyword = '';

    public created() {

    }

    public mounted() {
    }

    public unmounted() {
    }

}
