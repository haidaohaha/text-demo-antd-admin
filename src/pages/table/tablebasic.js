import React from 'react';
import { Card, Table, Modal } from 'antd';
import Axios from './../../Axios';
import Utils from './../../utils/utils';
export default class TableBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paginationPage: {}
        };
        this.params = {
            page: 1
        };
    }

    componentDidMount() {
        this.processDataSource1();
        this.processDataSource2();
        this.processDataSource3();
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
    processDataSource3() {
        let _this = this;
        Axios.ajax({
            method: 'GET',
            url: '/table/pagelist',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then(rst => {
            if (rst.code === 0) {
                const { list = [] } = rst.results;
                this.setState({
                    dataSource3: list.map((item, key) => ({ key, ...item })),
                    paginationPage: Utils.pagination(rst.results, (page, pageSize) => {
                        _this.params.page = page;
                        this.processDataSource3();
                    })
                });
            }
        });
    }

    onSelectChangeRadio = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };
    onSelectChangeCheckbox = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    handleClickShow(record) {
        // 简单写一写，具体情况具体对待
        this.setState({ selectedRowKeys: [record.key] });
        Modal.info({
            title: `姓名${record.userName}`,
            content: `爱好：${record.interest}`
        });
    }

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

        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };
        const rowSelectionRadio = {
            type: 'radio',
            selectedRowKeys,
            onChange: this.onSelectChangeRadio
        };
        const rowSelectionCheckbox = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: this.onSelectChangeCheckbox
        };

        const paginationInfo = {
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ['5', '10', '20', '30', '40', '50'],
            defaultPageSize: 5
        };
        return (
            <div>
                <Card title="基础表格">
                    <Table columns={columns} bordered dataSource={this.state.dataSource1} />
                </Card>
                <Card title="进阶表格">
                    <Table
                        style={{ height: 380 }}
                        pagination={{ pageSize: 2 }}
                        columns={columns}
                        bordered
                        dataSource={this.state.dataSource2}
                    />
                </Card>
                <Card title="进阶表格 - 单选">
                    <Table
                        columns={columns}
                        rowSelection={rowSelectionRadio}
                        pagination={paginationInfo}
                        bordered
                        rowKey={record => record.key}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
                <Card title="进阶表格 - 多选">
                    <Table
                        columns={columns}
                        rowSelection={rowSelectionCheckbox}
                        pagination={paginationInfo}
                        bordered
                        rowKey={record => record.key}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
                <Card title="进阶表格 - 行可点击">
                    <Table
                        columns={columns}
                        rowSelection={rowSelection}
                        pagination={paginationInfo}
                        bordered
                        rowKey={record => record.key}
                        dataSource={this.state.dataSource2}
                        onRow={record => {
                            return {
                                onClick: this.handleClickShow.bind(this, record)
                            };
                        }}
                    />
                </Card>
                <Card title="进阶表格 - 封装分页">
                    <Table
                        columns={columns}
                        bordered
                        rowKey="key"
                        dataSource={this.state.dataSource3}
                        pagination={this.state.paginationPage}
                    />
                </Card>
            </div>
        );
    }

    processDataSource1() {
        const data = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            }
        ];
        data.forEach((item, index) => {
            item.key = index;
        });
        this.setState({
            dataSource1: data
        });
    }
}
