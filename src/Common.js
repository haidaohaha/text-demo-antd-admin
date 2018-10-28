import React from 'react';
import { Row } from 'antd';

import Header from './components/Header';
import Footer from './components/Footer';

import './style/common.less';
export default class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row className="">
                <Row>
                    <Header type />
                </Row>
                <Row className="content">
                    {/* this is content page. */}
                    {this.props.children}
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Row>
        );
    }
}
