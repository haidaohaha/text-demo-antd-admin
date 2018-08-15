import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HaHa from '../route1/HaHa';
import About from '../route1/About';
import Topics from '../route1/Topics';

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
                {/* <Route exact path="/" component={HaHa} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} /> */}

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
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}
