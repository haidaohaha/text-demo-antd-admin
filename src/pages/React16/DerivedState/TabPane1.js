import React from 'react';
export default class TabPane1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('TabPane1');
        return null;
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('UNSAFE_TabPane1');
    // }
    render() {
        return <div>TabPane1</div>;
    }
}
