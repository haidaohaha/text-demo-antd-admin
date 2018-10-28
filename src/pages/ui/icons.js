import React, { Component } from 'react';
import { Card, Row } from 'antd';

import { FaBeer } from 'react-icons/fa';
import { Icon } from 'react-fa';

export default class Carousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }

    render() {
        return (
            <div>
                <Card title="字体图标">
                    <h3>
                        Lets go for a <FaBeer />?
                    </h3>

                    <Row>
                        {/* <Icon className="fa fa-female" />
                        <Icon className="fa fa-heart" /> */}
                        <Icon spin name="spinner" />
                        <Icon spin name="fa fa-heart" />
                    </Row>
                </Card>
            </div>
        );
    }
}
