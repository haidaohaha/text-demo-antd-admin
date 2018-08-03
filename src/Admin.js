import React from 'react';
import { Row, Col } from 'antd';

import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';

import './style/common.less';
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20}>
                    <Header />
                    <Footer />
                </Col>
            </Row>
        );
    }
}
