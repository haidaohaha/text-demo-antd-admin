import React from 'react';
import { Divider } from 'antd';
import './index.less';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <div className="footer">
                ©2018
                <Divider type="vertical" />
                <a href="https://github.com/haidaohaha" target="_black">
                    我的GitHub
                </a>
                <Divider type="vertical" />
                <a href="https://haidaohaha.github.io/" target="_black">
                    我的Blog
                </a>
            </div>
        );
    }
}
