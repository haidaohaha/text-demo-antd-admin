import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import Info from './Info';
import NoMatch from './NoMatch';
import About from '../route1/About';
import Topics from '../route1/Topics';

export default class Router3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <div>
                <h2>演示，动态路由参数的使用</h2>
                <Router>
                    <Main>
                        <Switch>
                            <Route
                                path="/home"
                                render={() => (
                                    <Home>
                                        <Route path="/home/:value" component={Info} />
                                    </Home>
                                )}
                            />
                            <Route path="/about" component={About} />
                            <Route path="/topics" component={Topics} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Main>
                </Router>
            </div>
        );
    }
}
