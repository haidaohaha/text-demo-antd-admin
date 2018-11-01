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

import KnowState from './Know-State';

class React16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    onClose = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <h1>观察各个特性时，把不看的组件，屏蔽了</h1>
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
                            getDerivedStateFromProps 这个函数，代替componentWillReceiveProps
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
                            <Portal visible={this.state.visible} onClose={this.onClose}>
                                <div>注意，这个模态框的 是挂载到另外一个，根节点 #modal</div>
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
                                    setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。
                                </p>
                                <p>
                                    setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数
                                    setState(partialState, callback) 中的callback拿到更新后的结果。
                                </p>
                                <p>
                                    setState
                                    的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout
                                    中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState
                                    的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState
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
                        <Card title=" 待定 " bordered={false}>
                            待定
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 待定 " bordered={false}>
                            待定
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default React16;
