import React, { Component } from 'react';
import { Card, Button, notification, Icon } from 'antd';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }
    openNotificationWithIcon = (type, placement, icon) => {
        if (placement) {
            notification.config({
                placement
            });
        }

        let notiConfig = {
            message: '还有希望，多读书！！！',
            description:
                '尽自己的能力，向上爬，越高越好，减少自己遗憾，24岁是一个坎，我已走过，即将迎来30大考，只要不死就有希望。'
        };
        
        if (icon) {
            notiConfig.icon = <Icon type="smile-circle" style={{ color: '#108ee9' }} />;
        }

        notification[type]({ ...notiConfig });
    };

    render() {
        return (
            <div>
                <Card title="通知提醒框">
                    <Button onClick={() => this.openNotificationWithIcon('open', '', 'icon')}>
                        open
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('success')}>
                        Success
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning')}>
                        Warning
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
                </Card>

                <Card title="通知提醒框(更改位置)">
                    <Button onClick={() => this.openNotificationWithIcon('success', 'topLeft')}>
                        Success
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('info', 'topRight')}>
                        Info
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('warning', 'bottomLeft')}>
                        Warning
                    </Button>
                    <Button onClick={() => this.openNotificationWithIcon('error', 'bottomRight')}>
                        Error
                    </Button>
                </Card>
            </div>
        );
    }
}
