import React, { Component } from 'react';
import { Card, Button, message } from 'antd';

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }
    openMessagesWithIcon = (type, placement) => {
        if (placement) {
            message.config({
                top: placement
            });
        }

        let content = '还有希望，多读书！！！';

        message[type](content);
    };

    openMessagesStyle = () => {
        let content = '加载中......';
        message
            .loading(content, 2)
            .then(() => {
                message.success('请求成功', 3);
            })
            .then(() => {
                message.info('加载完成', 6);
            });
    };

    render() {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openMessagesWithIcon('success', 100)}>
                        显示的位置为100
                    </Button>
                    <Button type="primary" onClick={() => this.openMessagesWithIcon('success', 50)}>
                        success
                    </Button>
                    <Button type="primary" onClick={() => this.openMessagesWithIcon('error')}>
                        error
                    </Button>
                    <Button type="primary" onClick={() => this.openMessagesWithIcon('info')}>
                        info
                    </Button>
                    <Button type="primary" onClick={() => this.openMessagesWithIcon('warning')}>
                        warning
                    </Button>
                    <Button onClick={() => this.openMessagesWithIcon('warn')}>warn</Button>
                    <Button onClick={() => this.openMessagesWithIcon('loading')}>loading</Button>
                    <Button onClick={this.openMessagesStyle}>综合</Button>
                </Card>
            </div>
        );
    }
}
