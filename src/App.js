import React from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

@withRouter
class App extends React.Component {
    constructor(props) {
        super(props);
        this.pathname = this.props.location.pathname;
        console.log('svip-pathname', this.pathname);
    }
    checkJsessionID = () => {
        if (this.props.location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login');
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home');
            }
        }
    };
    componentWillMount() {
        if (this.pathname == '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home');
            } else {
                this.props.history.replace('/login');
            }
        } else {
            this.checkJsessionID();
        }
    }
    componentWillReceiveProps() {
        this.checkJsessionID();
    }
    render() {
        return this.props.children;
    }
}

export default App;
