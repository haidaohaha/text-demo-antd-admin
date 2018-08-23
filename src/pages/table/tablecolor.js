import React from 'react';
import { Card, Table } from 'antd';
import Axios from '../../Axios';
import './tablecolor.less';
export default class TableColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.processDataSource2();
    }

    processDataSource2() {
        Axios.ajax({
            method: 'GET',
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(rst => {
            if (rst.code === 0) {
                this.setState({
                    dataSource2: rst.array.map((item, key) => ({ key, ...item }))
                });
            }
        });
    }

    onSelectChangeCheckbox = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    onCell = record => {
        if (record && !isNaN(record.interest)) {
            switch (record.interest) {
                case 1:
                case 2:
                    return { className: 'td_blue' };
                case 3:
                case 4:
                    return { className: 'td_yellow' };
                case 5:
                case 6:
                    return { className: 'td_orange' };
                case 7:
                case 8:
                    return { className: 'td_red' };
                default:
                    return null;
            }
        }
    };

    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                onCell: this.onCell,
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    };
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ];

        const { selectedRowKeys } = this.state; // 必须使用官方的 关键字 ， 否则会出现bug , 如清楚不了

        const rowSelectionCheckbox = {
            type: 'checkbox', // 默认可不写
            selectedRowKeys,
            onChange: this.onSelectChangeCheckbox
        };

        // const rowSelection = {
        //     type: 'radio', // 默认可不写
        //     selectedRowKeys
        // };

        const paginationInfo = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ['5', '10', '20', '30', '40', '50'],
            defaultPageSize: 15
        };
        return (
            <div className="tablecolor">
                <Card title="多彩表格 - cell(单元格颜色自定义))" className="tablecolor-cell">
                    <Table
                        columns={columns}
                        rowSelection={rowSelectionCheckbox}
                        pagination={paginationInfo}
                        bordered
                        rowKey={record => record.key}
                        dataSource={this.state.dataSource2}
                        onRow={record => {
                            return {
                                onClick: () => this.handleClickShow(record)
                            };
                        }}
                    />
                </Card>
                <Card title="多彩表格 - row(鼠标点击行)" className="tablecolor-row">
                    <Table
                        columns={columns}
                        // rowSelection={rowSelection}
                        pagination={paginationInfo}
                        bordered
                        rowKey="key"
                        rowClassName={record => (record.cur ? 'cur' : '')}
                        dataSource={this.state.dataSource2}
                        onRow={record => {
                            return {
                                onClick: () => this.handleClickShow(record)
                            };
                        }}
                    />
                </Card>
            </div>
        );
    }

    handleClickShow = record => {
        const { dataSource2 } = this.state;
        // 简单写一写，具体情况具体对待
        this.setState({
            // selectedRowKeys: [record.key],  // 不能增加，不然会覆盖了样式 导致 cur 的样式 加载不出
            dataSource2: dataSource2.map(
                v => (record.key === v.key ? { ...v, cur: true } : { ...v, cur: false })
            )
        });
    };
}
