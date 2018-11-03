import React from 'react';

import HocContainer from './HocContainer';

@HocContainer
class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component2: '普通组件属性'
        };
    }
    render() {
        return <input name="name" {...this.props.name} />;
    }
}

Component2 = HocContainer(Component2, '我是参数');
export default Component2;
