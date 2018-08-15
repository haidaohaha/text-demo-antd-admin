import React from 'react';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        console.log('测试动态路由', this.props);
        return (
            <div>
                这里是测试动态路由
                <br />
                动态路由值是：{this.props.match.params.value}
            </div>
        );
    }
}
