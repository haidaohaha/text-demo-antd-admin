import React from 'react';
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
                ©2018 海盗公司 隐私政策 服务条款 京ICP证080268号 京公网安备110108003898号
            </div>
        );
    }
}
