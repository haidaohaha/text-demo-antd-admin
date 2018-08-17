import React, { Component } from 'react';
import { Card, Button, Icon, Modal } from 'antd';
import './modals.less';
export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }
    handleOpen = type => {
        this.setState({
            [type]: true
        });
    };
    handleCancel = type => {
        this.setState({
            [type]: false
        });
    };
    handleConfirm = type => {
        Modal[type]({
            title: 'React',
            content: (
                <div>
                    <p>欢迎入门React高级课程</p>
                </div>
            ),
            onOk() {}
        });
    };
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary" onClick={() => this.handleOpen('modal1')}>
                        Open
                    </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal2')}>
                        自定义页脚
                    </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal3')}>
                        顶部20px
                    </Button>
                    <Button type="primary" onClick={() => this.handleOpen('modal4')}>
                        水平垂直居中
                    </Button>
                </Card>
                <Card title="基础按钮">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>
                        confirm
                    </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>
                        Info
                    </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>
                        Success
                    </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>
                        Error
                    </Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>
                        Warning
                    </Button>
                </Card>

                <Modal
                    title="React"
                    visible={this.state.modal1}
                    onOk={() => this.handleCancel('modal1')}
                    onCancel={() => this.handleCancel('modal1')}
                >
                    <p>欢迎入门React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.modal2}
                    onOk={() => this.handleCancel('modal2')}
                    onCancel={() => this.handleCancel('modal2')}
                    cancelText="算了"
                    okText="下一步"
                >
                    <p>欢迎入门React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.modal3}
                    onOk={() => this.handleCancel('modal3')}
                    onCancel={() => this.handleCancel('modal3')}
                    style={{ top: 20 }}
                >
                    <p>欢迎入门React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    centered
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal4}
                    onOk={() => this.handleCancel('modal4')}
                    onCancel={() => this.handleCancel('modal4')}
                >
                    <p>欢迎入门React高级课程</p>
                    <p>欢迎入门React高级课程</p>
                    <p>欢迎入门React高级课程</p>
                    <p>欢迎入门React高级课程</p>
                </Modal>
            </div>
        );
    }
}
