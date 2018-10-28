import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default {
    formateDate(time) {
        if (!time) return '';
        const date = new Date(time);
        return (
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate() +
            '-' +
            date.getHours() +
            ':' +
            date.getMinutes() +
            ':' +
            date.getSeconds()
        );
    },
    pagination(results, callback) {
        return {
            current: results.current, // 当前页
            pageSize: results.page_size || 10, // 每页几条
            total: results.total, // 共
            onChange: (page, pageSize) => {
                // page点击页码，pageSize共多少页
                // 参数是 antd 默认的
                callback(page, pageSize);
            },
            showTotal: () => `共 ${results.total} 条`,
            pageSizeOptions: ['5', '10', '20', '30', '40', '50'],
            defaultPageSize: results.pages || 5,
            showSizeChanger: true,
            showQuickJumper: true // 是否跳转
        };
    },
    getOptionList(data) {
        if (!data) {
            return [];
        }
        let options = []; //[<Option value="0" key="all_key">全部</Option>];
        options = data.map(item => (
            <Option value={item.id} key={item.id}>
                {item.name}
            </Option>
        ));
        return options;
    }
};
