import React from 'react';

import HocStyleComponent from './HocStyleComponent';

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

const colorSytle = {
    color: 'red'
};

Component1 = HocStyleComponent(Component1, colorSytle);
export default Component1;
