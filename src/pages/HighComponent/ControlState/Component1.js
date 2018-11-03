import React from 'react';

import HocContainer from './HocContainer';

@HocContainer
class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component1: '普通组件属性'
        };
    }
    render() {
        return <input name="name" {...this.props.name} />;
    }
}

// Component1 = HocContainer(Component1);
export default Component1;
