import React, { Component } from 'react';
import { Card, Icon, Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class MyTabs extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: '我都没看直接复制的😂 of Tab 1', key: '1' },
            { title: 'Tab 2', content: '我都没看直接复制的😂 of Tab 2', key: '2' },
            // { title: 'Tab 3', content: '我都没看直接复制的😂 of Tab 3', key: '3', closable: false }
            { title: 'Tab 3', content: '我都没看直接复制的😂 of Tab 3', key: '3' }
        ];
        this.state = {
            activeKey: panes[0].key,
            panes
        };
    }

    callback = key => {
        console.log(key);
    };

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        // 若删除的是当前选项，则次tab被选中
        // 若删除的非当前选项，判断直接过滤即可
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div>
                <Card title="Tab标签">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab标签带图标">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="plus" />
                                    Tab 1
                                </span>
                            }
                            key="1"
                        >
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="smile-o" />
                                    Tab 2
                                </span>
                            }
                            key="2"
                        >
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="share-alt" />
                                    Tab 3
                                </span>
                            }
                            key="3"
                        >
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab标签可删除新增">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                {pane.content}
                            </TabPane>
                        ))}
                    </Tabs>
                </Card>
            </div>
        );
    }
}
