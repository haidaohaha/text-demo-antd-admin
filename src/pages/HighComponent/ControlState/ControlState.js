import React from 'react';

import Component1 from './Component1';
import Component2 from './Component2';
import { Divider } from 'antd';
export default class ControlState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'ControlProp'
        };
    }
    render() {
        return (
            <div>
                <Component1 />
                <Divider type="horizontal" />
                <Component2 />
            </div>
        );
    }
}
