import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        console.log(this.props.children);
        return (
            <div>
                this is main page.
                <Link to="/home/a">嵌套路由的使用</Link>
                {this.props.children}
            </div>
        );
    }
}
