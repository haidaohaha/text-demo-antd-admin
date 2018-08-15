import React from 'react';
import {
    HashRouter,
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import HaHa from './HaHa';
import About from './About';
import Topics from './Topics';

export default class Router1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <Router>
                {/* <HashRouter> */}
                <div>
                    <h2>router 基本用法</h2>
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
                    <Switch>
                        <Route exact path="/" component={HaHa} />
                        {/* <Route path="/" component={HaHa} /> */}
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </div>
                {/* </HashRouter> */}
            </Router>
        );
    }
}

// 总结一下，
// HashRouter 和 BrowserRouter  区别是具体的地址不一样， 不使用 hash "#" 资料显示需要服务器支持，但我不知道如何设置。
// http://localhost:3000/about    http://localhost:3000/#/about

// 精准匹配的 属性 exact
// Switch 只会匹配第一个符合的后面的不在去匹配，如果不加，会匹配所有符合要求的。（ router 4 本身是支持多个匹配的，一切皆组件）
