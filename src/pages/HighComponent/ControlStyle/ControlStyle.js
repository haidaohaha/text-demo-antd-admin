import React from 'react';

import Component1 from './Component1';

export default class ControlStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log('svip-样式父组件');
    }
    render() {
        return (
            <div>
                <Component1 />
            </div>
        );
    }
}
