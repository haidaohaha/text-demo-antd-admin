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
}
