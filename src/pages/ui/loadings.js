import React, { Component } from 'react';
import { Card, Icon, Spin, Alert } from 'antd';
export default class Loadings extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Card title="Spin用法">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={<Icon type="loading" />} />
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="Alert message title"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                    <Spin tip="加载中...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin indicator={<Icon type="loading" />} tip="加载中...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <Spin indicator={<div>hahaha</div>} tip="加载中...">
                        <Alert
                            message="只是增加了一层，浮沉"
                            description="Further details about the context of this alert."
                            type="success"
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}
