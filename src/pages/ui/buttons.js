import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
export default class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true,
            size: 'default'
        };
    }
    handleClickLoad = () => {
        this.setState({
            load: !this.state.load
        });
    };
    handleChangeRadio = e => {
        this.setState({
            size: e.target.value
        });
    };
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">AntD</Button>
                    <Button>AntD</Button>
                    <Button type="dashed">AntD</Button>
                    <Button type="danger">AntD</Button>
                </Card>

                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button>
                        <Icon type="edit" />
                        编辑
                    </Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search" />
                    <Button type="primary" icon="search">
                        搜索
                    </Button>
                    <Button type="primary" icon="download">
                        下载
                    </Button>
                </Card>

                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.load}>
                        AntD
                    </Button>
                    <Button shape="circle" loading={this.state.load} />
                    <Button loading={this.state.load} onClick={this.handleClickLoad}>
                        点击加载
                    </Button>
                    <Button type="primary" shape="circle" loading={this.state.load} />
                    <Button type="primary" onClick={this.handleClickLoad}>
                        关闭
                    </Button>
                </Card>

                <Card title="按钮组">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" icon="cloud" />
                        <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                </Card>

                <Card title="按钮尺寸">
                    <RadioGroup onChange={this.handleChangeRadio} value={this.state.size}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </RadioGroup>
                    <Button type="primary" size={this.state.size}>
                        AntD
                    </Button>
                    <Button size={this.state.size}>AntD</Button>
                    <Button type="dashed" size={this.state.size}>
                        AntD
                    </Button>
                    <Button type="danger" size={this.state.size}>
                        AntD
                    </Button>
                </Card>
            </div>
        );
    }
}
