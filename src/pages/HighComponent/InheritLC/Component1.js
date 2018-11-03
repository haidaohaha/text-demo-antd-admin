import React from 'react';

import HocComponent from './HocComponent';

@HocComponent
class Component1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: true
        };
    }

    render() {
        return <div>我是一个组件</div>;
    }
}

export default Component1;
