import React from 'react';
import { Tabs } from 'antd';
import TabPane1 from './TabPane1';
import TabPane2 from './TabPane2';
import TabPane3 from './TabPane3';
import TabPane4 from './TabPane4';
import TabPane5 from './TabPane5';

const TabPane = Tabs.TabPane;

export default class KnowState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '举例 state 异步同步的分别情况！'
        };
    }
    callback = key => {
        console.log(key);
    };

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback} tabPosition={'left'}>
                    <TabPane tab="合成事件" key="1">
                        <TabPane1 />
                    </TabPane>
                    <TabPane tab="钩子函数即生命周期" key="2">
                        <TabPane2 />
                    </TabPane>
                    <TabPane tab="自定义事件" key="3">
                        <TabPane3 />
                    </TabPane>
                    <TabPane tab="setTimeout 的 state " key="4">
                        <TabPane4 />
                    </TabPane>
                    <TabPane tab="setState中的批量更新" key="5">
                        <TabPane5 />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
