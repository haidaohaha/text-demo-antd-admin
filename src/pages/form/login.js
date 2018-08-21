import React, { Component } from 'react';
import { Card, Button, Checkbox, Form, Input, Icon, message } from 'antd';
import './login.less';

const FormItem = Form.Item;
@Form.create()
export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }

    hasErrors = fieldsError => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };

    rulesCallback(rule, value, callback) {
        console.log('vip-rule', rule);
        console.log('vip-value', value);
        console.log('vip-callback', callback);
        callback();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                message.success('填写正确，允许提交');
            } else {
                message.error('正确填写，再提交');
            }
        });
    };

    render() {
        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched
        } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <Card title="登陆 - 行内表单">
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={this.hasErrors(getFieldsError())}
                            >
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登陆 - 垂直表单">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                    { required: true, message: '请输入你的用户名!' },
                                    { min: 4, max: 10, message: '请输入用户名为4~10位字符!' },
                                    {
                                        transform: value => parseFloat(value),
                                        type: 'number',
                                        message: '请输入数字开头!'
                                    },
                                    {
                                        pattern: new RegExp('^\\w+$', 'g'),
                                        message: '用户名必须为字母或者数字'
                                    },
                                    {
                                        validator: this.rulesCallback,
                                        message: '多个规则验证!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    placeholder="Username"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }]
                            })(
                                <Input
                                    prefix={
                                        <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                立即登陆
                            </Button>
                            Or <a href="">立即注册!</a>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}
