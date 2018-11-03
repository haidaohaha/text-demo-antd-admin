import React from 'react';
import { Card, Col, Row } from 'antd';
import ControlProp from './ControlProp/ControlProp';
import ControlState from './ControlState/ControlState';

import ControlStyle from './ControlStyle/ControlStyle';
import InheritLC from './InheritLC/InheritLC';

class HighComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <h1>高阶组件的使用 - 两大类 六种方式</h1>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 代理方式之 操纵prop " bordered={false}>
                            <h3>追加附加 属性</h3>
                            <ControlProp />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 代理方式之 抽取状态 " bordered={false}>
                            <h3>最简单的 input 组件,使用后简化很多,明显感觉到组件的作用</h3>
                            <ControlState />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                        <Card title=" 代理方式之 包装组件  " bordered={false}>
                            <h3>猛一下，没看懂... 重点是 ‘包装’ 二字，HTML 能使用什么包装昵</h3>
                            <h3>
                                细细品味，给了我一些建议，以后不管AntD 的组件，Row 或者Card
                                我都可以，使用这个组件，增加样式，多多琢磨
                            </h3>
                            <ControlStyle />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title=" 继承方式之 操纵生命周期(渲染劫持) " bordered={false}>
                            <h3>太牛了，组件还可这样书写 服气 继承，上props 和 下state 都可以，为我所用</h3>
                            <InheritLC />
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
export default HighComponent;
