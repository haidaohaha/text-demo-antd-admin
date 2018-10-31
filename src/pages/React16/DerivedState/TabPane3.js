import React from 'react';
export default class TabPane3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('TabPane3');
        return null;
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('UNSAFE_TabPane3');
    // }
    render() {
        return <div>TabPane3</div>;
    }
}
