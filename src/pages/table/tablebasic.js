import React from 'react';
import { Card, Table } from 'antd';
import Axios from './../../Axios';
export default class TableBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }

    componentDidMount() {
        this.processDataSource1();
        this.processDataSource2();
    }

    processDataSource2() {
        // Axios.get('https://www.easy-mock.com/mock/5b7d1cc1a553b04aa3c92f7a/antd/table/list').then(
        //     res => {
        //         console.log('vip-res', res);
        //     }
        // );
        
        Axios.ajax({
            method: 'GET',
            url: '/table/list'
        }).then(rst => {
            this.setState({
                dataSource2: rst.array.map((item, key) => ({ key, ...item }))
            });
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

        return (
            <div>
                <Card title="基础表格">
                    <Table columns={columns} bordered dataSource={this.state.dataSource1} />
                </Card>
                <Card title="进阶表格">
                    <Table columns={columns} bordered dataSource={this.state.dataSource2} />
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
