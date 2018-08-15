import React, { Component } from 'react';
import Admin from './Admin';
import Router1 from './pages/route_demo/route1/Router1';
import Router2 from './pages/route_demo/route2/Router2';
import Router3 from './pages/route_demo/route3/Router3';
class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Admin /> */}
                <Router1 />
                <hr />
                <Router2 />
                <hr />
                <Router3 />
            </div>
        );
    }
}

export default App;
