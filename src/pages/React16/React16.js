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

class React16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
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
            </div>
        );
    }
}
export default React16;
