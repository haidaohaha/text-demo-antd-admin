import React from 'react';

import HocAddProp from './HocAddProp';
import { Divider } from 'antd';

class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component1: '普通组件属性'
        };
    }
    render() {
        return (
            <div>
                普通组件属性:
                {this.state.component1}
                <Divider type="horizontal" />
                高阶组件属性:
                {this.props.hocaddprop}
                <Divider type="horizontal" />
                普通组件参数:
                {this.props.arg||'暂无'}
            </div>
        );
    }
}

Component2 = HocAddProp(Component2, '我是参数');
export default Component2;
