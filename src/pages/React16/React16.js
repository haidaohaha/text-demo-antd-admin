import React from 'react';
import { Card, Col, Row } from 'antd';
// import PotentialError from './PotentialError';
import Lifecycle from './Lifecycle';
import DerivedState from './DerivedState';

class React16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
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
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="实践" bordered={false}>
                            getDerivedStateFromProps 这个函数，代替componentWillReceiveProps
                            <DerivedState />
                        </Card>
                    </Col>
                    <Col span={12} />
                </Row>
            </div>
        );
    }
}
export default React16;
