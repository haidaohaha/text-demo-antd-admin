import React from 'react';
import './index.less';
export default class NoMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>404 没有发现</div>;
    }
}
