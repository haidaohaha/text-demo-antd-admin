import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class Main extends React.Component {
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
                <ul>
                    <li>
                        <Link to="/home">HaHa</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/ecidi1">ECIDI1</Link>
                    </li>
                    <li>
                        <Link to="/ecidi2">ECIDI2</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
