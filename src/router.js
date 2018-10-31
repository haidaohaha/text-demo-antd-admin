import React, { Component } from 'react';
// import { HashRouter, BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
// import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
// import Login from './pages/Login/login';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notifications';
import Messages from './pages/ui/messages';
import MyTabs from './pages/ui/tabs';
import Gallerys from './pages/ui/gallerys';
import Carousels from './pages/ui/carousels';
import Icons from './pages/ui/icons';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import TableBasic from './pages/table/tablebasic';
import TableHigh from './pages/table/tablehigh';
import TableColor from './pages/table/tablecolor';
import FormCity from './pages/city';
import Order from './pages/order';
import OrderDetail from './pages/order/detail';
import BikeMap from './pages/map/bikeMap';
import Motion from './pages/motion/motion';
import React16 from './pages/React16/React16';

import Common from './Common';
export default class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
        const { default: Home } = await import('./pages/Home');
        const { default: Login } = await import('./pages/Login/login');
        this.setState({
            Home,
            Login
        });
    }

    render() {
        const { Home, Login } = this.state;
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route
                            path="/common"
                            render={() => (
                                <Common>
                                    <Route path="/common/order/detail/:detailId" component={OrderDetail} />
                                </Common>
                            )}
                        />

                        <Route
                            path="/"
                            render={() => (
                                <Admin>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notifications" component={Notifications} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={MyTabs} />
                                    <Route path="/ui/gallerys" component={Gallerys} />
                                    <Route path="/ui/carousels" component={Carousels} />
                                    <Route path="/ui/icons" component={Icons} />
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={TableBasic} />
                                    <Route path="/table/high" component={TableHigh} />
                                    <Route path="/table/color" component={TableColor} />
                                    <Route path="/city" component={FormCity} />
                                    <Route path="/order" component={Order} />
                                    <Route path="/bikeMap" component={BikeMap} />
                                    <Route path="/404" component={NoMatch} />
                                    <Route path="/motion" component={Motion} />
                                    <Route path="/react16" component={React16} />
                                </Admin>
                            )}
                        />
                    </Switch>
                </App>
            </Router>
        );
    }
}
