import axios from 'axios';
import _jsonp from 'jsonp';

export default class Axios {
    static jsonp(url, option) {
        return new Promise((resolve, reject) => {
            _jsonp(url, option, (err, data) => {
                if (!err && data.status === 'success') {
                    resolve(data.results[0]);
                } else {
                    reject(err);
                }
            });
        });
    }

    // https://www.kancloud.cn/yunye/axios/234845
    static ajax(options) {
        const basicUrl = 'https://www.easy-mock.com/mock/5b7d1cc1a553b04aa3c92f7a/antd';
        return new Promise((resolve, reject) => {
            axios({
                method: options.method,
                url: options.url,
                baseURL: basicUrl,
                // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
                // 如果请求话费了超过 `timeout` 的时间，请求将被中断
                timeout: 1000
            }).then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject();
                }
            });
        });
    }
}
