import React from 'react';
import { Tabs } from 'antd';
import TabPane1 from "./TabPane1";
import TabPane2 from "./TabPane2";
import TabPane3 from "./TabPane3";

const TabPane = Tabs.TabPane;

export default class DerivedState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    callback = key => {
        console.log(key);
    };

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Tab 1" key="1">
                        <TabPane1 />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <TabPane2 />
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <TabPane3 />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
