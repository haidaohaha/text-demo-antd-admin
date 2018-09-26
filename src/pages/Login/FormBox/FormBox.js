import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { clickUpdateLoading } from './../../../redux/action';

const FormItem = Form.Item;
@connect(
    state => state,
    {
        clickUpdateLoading
    }
)
class FromBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit = e => {
        e.preventDefault();
        let { clickUpdateLoading, form } = this.props;
        this.props.submit(form, clickUpdateLoading);
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { loading = false } = this.props.updateLoading;

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '输入admin' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="admin" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码是123456' }]
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="123456"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="l_button" loading={loading}>
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(FromBox);
