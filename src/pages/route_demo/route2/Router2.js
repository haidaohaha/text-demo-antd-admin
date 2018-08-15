import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import HaHa from '../route1/HaHa';
import About from '../route1/About';
import Topics from '../route1/Topics';

export default class Router2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <div>
                <h2>演示，如何拆分路由</h2>
                <Router>
                    {/* 我的写法 */}
                    {/* 我写的，实质就是最简单的拆分，并没有理解，而且 this.props.children 的使用也是错误的，组件内部最后，return this.props.children */}
                    {/* 多看看老师的写法 */}
                    {/* <div>
                        <ul>
                            <li>
                                <Link to="/">HaHa</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul>
                        <hr />
                        <Main>{this.props.children}</Main>
                    </div> */}
                    {/* 老师的写法 */}
                    {/* <Main>
                        <Route exact path="/" component={HaHa} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />                       
                    </Main> */}
                    {/* 嵌套路由的写法 */}
                    <Main>
                        <Route path="/home" render={()=>(
                            <Home>
                                <Route path="/home/a" component={HaHa} />
                            </Home>
                        )} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />                       
                    </Main>
                </Router>
            </div>
        );
    }
}
