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
            current: results.current,
            pageSize: results.page_size || 10, // 每页几条
            total: results.total,
            onChange: (page, pageSize) => {
                // 参数是 antd 默认的
                callback(page, pageSize);
            },
            showTotal: () => `共 ${results.total} 条`,

            pageSizeOptions: ['5', '10', '20', '30', '40', '50'],
            defaultPageSize: results.pages || 5,
            showSizeChanger: true,
            showQuickJumper: true
        };
    }
};
