import React from 'react';
import { Card, Table, Modal, Divider, Popconfirm, Badge, Icon } from 'antd';
import Axios from '../../Axios';
import { Button } from '../../../node_modules/antd/lib/radio';

export default class TableHigh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.processDataSource1();
    }

    processDataSource1() {
        Axios.ajax({
            method: 'GET',
            url: '/table/high/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then(rst => {
            if (rst.code === 0) {
                const { list = [] } = rst.results;
                this.setState({
                    dataSource: list.map((item, key) => ({ key, ...item }))
                });
            }
        });
    }

    render() {
        const columns1 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
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
                dataIndex: 'interest',
                width: 80,
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
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',

                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ];

        // 复制太多  address 控制台 报警告
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed: 'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed: 'left'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                fixed: 'left',
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
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
                dataIndex: 'interest',
                width: 80,
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
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ];

        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    let config = {
                        '1': <Badge status="success" text="咸鱼一条" />,

                        '2': <Badge status="error" text="风华浪子" />,

                        '3': <Badge status="default" text="北大才子" />,

                        '4': <Badge status="processing" text="百度FE" />,

                        '5': <Badge status="warning" text="创业者" />
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
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
                title: '年龄',
                dataIndex: 'age',
                width: 80,
                sorter: (a, b) => a.age - b.age,
                sortOrder: this.state.sorterOrder
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            }
        ];

        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
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
                dataIndex: 'interest',
                width: 80,
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
                dataIndex: 'birthday',
                width: 80
            },
            {
                title: '地址',

                dataIndex: 'address',
                width: 80
            },
            {
                title: '早起时间',
                dataIndex: 'time',
                width: 80
            },
            {
                title: '编辑',
                dataIndex: 'opt0',
                width: 120,
                render: (text, record) => (
                    <a onClick={this.onViewClick.bind(this, record)}>
                        <Icon type="form" />
                    </a>
                )
            },
            {
                title: '删除',
                dataIndex: 'opt1',
                width: 120,
                render: (text, record) => <Button>删除</Button>
            },
            {
                title: '操作',
                dataIndex: 'opt2',
                width: 200,
                render: (text, record) => {
                    return (
                        <div style={{ textAlign: 'left' }}>
                            <a onClick={this.onViewClick.bind(this, record)}>预览</a>
                            <Divider type="vertical" />
                            <a onClick={this.onDownClick.bind(this, record)}>下载</a>
                            <Divider type="vertical" />
                            <Popconfirm
                                placement="left"
                                title="确定删除吗？"
                                onConfirm={this.delete.bind(this, record)}
                                okText="确认"
                                cancelText="取消"
                            >
                                <a>删除</a>
                            </Popconfirm>
                        </div>
                    );
                }
            }
        ];

        return (
            <div>
                <Card title="头部固定">
                    <Table
                        columns={columns1}
                        bordered
                        dataSource={this.state.dataSource}
                        pagination={{ pageSize: 50 }}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        columns={columns2}
                        pagination={{ pageSize: 5 }}
                        bordered
                        dataSource={this.state.dataSource}
                        scroll={{ x: 2160 }}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        pagination={{ pageSize: 5 }}
                        columns={columns3}
                        bordered
                        dataSource={this.state.dataSource}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table
                        columns={columns4}
                        bordered
                        dataSource={this.state.dataSource}
                        pagination={{ pageSize: 5 }}
                    />
                </Card>
            </div>
        );
    }

    handleChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
        this.setState({
            sorterOrder: sorter.order
        });
    };

    onViewClick() {
        Modal.success({
            title: '操作成功！'
        });
    }
    onDownClick() {
        Modal.success({
            title: '操作成功！'
        });
    }
    delete() {
        Modal.success({
            title: '操作成功！'
        });
    }
}
