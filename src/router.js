import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login/login';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notifications from './pages/ui/notifications';

export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => (
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notifications" component={Notifications} />
                                    <Redirect to="/home" />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        )}
                    />
                </App>
            </Router>
        );
    }
}
