import React from 'react';
import { Card, Col, Row } from 'antd';
// import PotentialError from './PotentialError';
import Lifecycle from './Lifecycle';
import DerivedState from './DerivedState';
import ContextAPI from './ContextAPI';
import ContextAPI2 from './ContextAPI2';
import ReactStrictMode from './ReactStrictMode';
import Portal from './Portal';
import ReactForWardRef from './ReactForWardRef';

import Demo from './Demo';

import KnowState from './Know-State';

import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import ReactEcharts from 'echarts-for-react';

// 数据源
// const data = [
//     { genre: 'Sports', sold: 275, income: 2300 },
//     { genre: 'Strategy', sold: 115, income: 667 },
//     { genre: 'Action', sold: 120, income: 982 },
//     { genre: 'Shooter', sold: 350, income: 5271 },
//     { genre: 'Other', sold: 150, income: 3710 }
// ];

// // 定义度量
// const cols = {
//   sold: { alias: '销售量' },
//   genre: { alias: '游戏种类' }
// };

class React16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            cols: {
                sold: { alias: '销售量' },
                genre: { alias: '游戏种类' }
            },
            data: [
                { genre: 'Sports', sold: 275, income: 2300 },
                { genre: 'Strategy', sold: 115, income: 667 },
                { genre: 'Action', sold: 120, income: 982 },
                { genre: 'Shooter', sold: 350, income: 5271 },
                { genre: 'Other', sold: 150, income: 3710 }
            ]
        };
    }

    componentDidMount() {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({ cols: {} });
        }, 5000);
    }

    onClose = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        const data = [
            {
                month: '一月',
                tem: 7,
                city: 'tokyo'
            },
            {
                month: '二月',
                tem: 6.9,
                city: 'tokyo'
            },
            {
                month: '三月',
                tem: 9.5,
                city: 'tokyo'
            },
            {
                month: '四月',
                tem: 14.5,
                city: 'tokyo'
            },
            {
                month: '五月',
                tem: 18.2,
                city: 'tokyo'
            },
            {
                month: '六月',
                tem: 21.5,
                city: 'tokyo'
            },
            {
                month: '七月',
                tem: 25.2,
                city: 'tokyo'
            },
            {
                month: '八月',
                tem: 26.5,
                city: 'tokyo'
            },
            {
                month: '九月',
                tem: 23.3,
                city: 'tokyo'
            },
            {
                month: '十月',
                tem: 18.3,
                city: 'tokyo'
            },
            {
                month: '十一月',
                tem: 13.9,
                city: 'tokyo'
            }
        ];

        const data1 = [
            {
                year: '1991',
                value: 3
            },
            {
                year: '1992',
                value: 4
            },
            {
                year: '1993',
                value: 3.5
            },
            {
                year: '1994',
                value: 5
            },
            {
                year: '1995',
                value: 4.9
            },
            {
                year: '1996',
                value: 6
            },
            {
                year: '1997',
                value: 7
            },
            {
                year: '1998',
                value: 9
            },
            {
                year: '1999',
                value: 13
            }
        ];
        const cols1 = {
            value: {
                min: 0
            },
            year: {
                range: [0, 1]
            }
        };

        const option = {
            title: {
                text: '复核异常',
                subtext: '注：实际代表拣错商品情况',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            // color:['#F8A20F','#FFC100','#1FBBA6','#5FA3F0','#FA8564','#A9D86E'],
            // color:['#F8A20F'],
            color: ['#3385FF'],
            legend: {
                data: ['异常复核'],
                // textStyle: {
                //      color:['red']
                // },
                right: 20,
                top: 160
            },
            grid: {
                left: '3%',
                right: '18%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                // feature: {
                //     saveAsImage: {}
                // }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    '12月01日',
                    '12月02日',
                    '12月03日',
                    '12月04日',
                    '12月05日',
                    '12月06日',
                    '12月07日',
                    '12月08日',
                    '12月09日',
                    '12月10日',
                    '12月11日',
                    '12月12日',
                    '12月13日',
                    '12月14日',
                    '12月15日'
                ],
                axisLabel: {
                    //底部文字倾斜
                    interval: 0,
                    rotate: 30
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '异常复核',
                    type: 'line',
                    stack: '总量',
                    data: [2, 1, 3, 0, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2]
                }
            ]
        };
        const option1 = {
            title: {
                text: '库位异常',
                subtext: '注：实际代表库位商品数量不符情况',
                x: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            color: ['#F8A20F'],
            legend: {
                data: ['库位异常'],
                right: 20,
                top: 160
            },
            grid: {
                left: '3%',
                right: '18%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    '12月01日',
                    '12月02日',
                    '12月03日',
                    '12月04日',
                    '12月05日',
                    '12月06日',
                    '12月07日',
                    '12月08日',
                    '12月09日',
                    '12月10日',
                    '12月11日',
                    '12月12日',
                    '12月13日',
                    '12月14日',
                    '12月15日'
                ],
                axisLabel: {
                    //底部文字倾斜
                    interval: 0,
                    rotate: 30
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '库位异常',
                    type: 'line',
                    stack: '总量',
                    data: [2, 1, 3, 0, 1, 2, 1, 2, 1, 1, 2, 2, 1, 1, 2]
                }
            ]
        };

        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <h1>观察各个特性时，把不看的组件，屏蔽了</h1>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}></Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}></Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            <ReactEcharts
                                option={option}
                                style={{ width: '100%', height: '360px' }}
                                // notMerge={true}
                                // lazyUpdate={true}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            <ReactEcharts
                                option={option1}
                                style={{ width: '100%', height: '360px' }}
                                // notMerge={true}
                                // lazyUpdate={true}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            <Chart
                                // height={window.innerHeight}
                                // width={600}
                                // height={400}
                                data={data}
                                forceFit
                            >
                                <Axis name="month" />
                                <Axis name="tem" />
                                <Tooltip
                                    containerTpl='<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>'
                                    itemTpl='<tr class="g2-tooltip-list-item"><td style="color:{color}">{name}</td><td>{value}</td></tr>'
                                    offset={50}
                                    g2-tooltip={{
                                        position: 'absolute',
                                        visibility: 'hidden',
                                        border: '1px solid #efefef',
                                        backgroundColor: 'white',
                                        color: '#000',
                                        opacity: '0.8',
                                        padding: '5px 15px',
                                        transition: 'top 200ms,left 200ms'
                                    }}
                                    g2-tooltip-list={{
                                        margin: '10px'
                                    }}
                                />
                                <Geom type="line" position="month*tem" />
                            </Chart>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            <Chart
                                height={400}
                                data={data1}
                                scale={cols1}
                                forceFit
                            >
                                <Axis name="year" />
                                <Axis name="value" />
                                <Tooltip
                                    crosshairs={{
                                        type: 'y'
                                    }}
                                />
                                <Geom
                                    type="line"
                                    position="year*value"
                                    size={2}
                                />
                                <Geom
                                    type="point"
                                    position="year*value"
                                    size={4}
                                    shape={'circle'}
                                    style={{
                                        stroke: '#fff',
                                        lineWidth: 1
                                    }}
                                />
                            </Chart>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title="处理错误的生命周期" bordered={false}>
                            {/* 包裹一层 错误处理  目前没怎么使用过 */}
                            {/* <PotentialError> */}
                            {/* </PotentialError> */}
                            componentDidCatch
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="React16.3新的生命周期" bordered={false}>
                            <Lifecycle />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title="实践" bordered={false}>
                            getDerivedStateFromProps
                            这个函数，代替componentWillReceiveProps
                            <DerivedState />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="全新的 Context API" bordered={false}>
                            <ContextAPI />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title="Context API 与 Redux" bordered={false}>
                            <ContextAPI2 />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="React Strict Mode" bordered={false}>
                            <React.StrictMode>
                                <ReactStrictMode />
                            </React.StrictMode>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title="Portal" bordered={false}>
                            <Portal
                                visible={this.state.visible}
                                onClose={this.onClose}
                            >
                                <div>
                                    注意，这个模态框的 是挂载到另外一个，根节点
                                    #modal
                                </div>
                            </Portal>
                            <button onClick={this.onClose}>显示/隐藏</button>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="Refs 操作DOM" bordered={false}>
                            <ReactForWardRef />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 你真的了解 state吗？ " bordered={false}>
                            <div>
                                <h2>总结 ：</h2>
                                <p>
                                    setState
                                    只在合成事件和钩子函数中是“异步”的，在原生事件和
                                    setTimeout 中都是同步的。
                                </p>
                                <p>
                                    setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数
                                    setState(partialState, callback)
                                    中的callback拿到更新后的结果。
                                </p>
                                <p>
                                    setState
                                    的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout
                                    中不会批量更新，在“异步”中如果对同一个值进行多次
                                    setState ， setState
                                    的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时
                                    setState
                                    多个不同的值，在更新时会对其进行合并批量更新。
                                </p>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 切换 Tab 查看 state " bordered={false}>
                            <KnowState />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 面试题（多看看） " bordered={false}>
                            <Demo />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            <Chart
                                width={600}
                                height={400}
                                data={this.state.data}
                                scale={this.state.cols}
                            >
                                <Axis name="genre" title />
                                <Axis name="sold" title />
                                <Legend position="top" dy={-20} />
                                <Tooltip />
                                <Geom
                                    type="interval"
                                    position="genre*sold"
                                    color="genre"
                                />
                            </Chart>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default React16;
