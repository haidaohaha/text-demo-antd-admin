import React from 'react';

import Component1 from './Component1';

export default class InheritLC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: true
        };
    }
    componentDidMount() {
        if (this.timer) clearInterval(this.timer);

        this.timer = setTimeout(() => {
            this.setState({
                time: false
            });
        }, 2 * 1000);
    }
    
    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer);
    }

    render() {
        return <Component1 time={this.state.time} />;
    }
}
