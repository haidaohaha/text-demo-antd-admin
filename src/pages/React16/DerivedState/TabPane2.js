import React from 'react';
export default class TabPane2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('TabPane2');
        return null;
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('UNSAFE_TabPane2');
    // }
    render() {
        return <div>TabPane2</div>;
    }
}
