import React, { Component } from 'react';
import { message } from 'antd';
import CryptoJS from 'crypto-js';
import FormBox from './FormBox/FormBox';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { clickUpdateLoading, updateName } from './../../redux/action';

import { default as reducer } from './store/store';
import { injectReducer } from '../../store';

import './login.less';
import { bindActionCreators } from 'redux';
import { actions } from './store/store';

@connect(
    state => state,
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        };
    }
)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        injectReducer('login', reducer);
    }

    submit = (form, updateLoading) => {
        form.validateFields((err, values) => {
            if (!err) {
                updateLoading(true);
                this.timer = setTimeout(() => {
                    updateLoading(false);
                    let { userName, password } = values;
                    if (userName == 'admin' && password == '123456') {
                        let message = `M&${userName}&${password}`;
                        let key = 'react_starter';
                        let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key));
                        Cookies.set('JSESSIONID', session, { expires: 1, path: '/' });
                        Cookies.set('userName', userName, { expires: 1, path: '/' });
                        const {
                            actions: { updateName }
                        } = this.props;
                        updateName(userName);
                        this.props.history.push('/home');
                    } else {
                        message.error('账号：admin ； 密码：123456');
                    }
                }, 1500);
            }
        });
    };

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div className="Login_wrap">
                <div className="form P_auto">
                    <div className="logo login">
                        <img src="/assets/logo.svg" alt="" />
                        <h1>AntD Admin</h1>
                    </div>
                    <FormBox submit={this.submit} />
                </div>
            </div>
        );
    }
}

export default Login;
