import React from 'react';
import { Row, Col } from 'antd';

import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';

import './style/common.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './common/store';
@connect(
    state => {
        const {
            rootReducer: { menuName }
        } = state;
        return { menuName };
    },
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        };
    }
)
class Admin extends React.Component {
    constructor(props) {
        super(props);
        console.log('svip-props', this.props);

        this.state = {};
    }
    render() {
        const {
            menuName = '',
            actions: { getMenuName }
        } = this.props;
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft getMenuName={getMenuName} />
                </Col>
                <Col span={20} className="main">
                    <Row>
                        <Header menuName={menuName} getMenuName={getMenuName} />
                    </Row>
                    <Row className="content">
                        {/* <Home /> */}
                        {this.props.children}
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Admin;
