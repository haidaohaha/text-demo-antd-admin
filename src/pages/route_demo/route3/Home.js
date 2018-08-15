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
                <br />
                <Link to="/home/12345">嵌套路由1</Link>
                <br />
                <Link to="/home/hahah">嵌套路由2</Link>
                {this.props.children}
            </div>
        );
    }
}
