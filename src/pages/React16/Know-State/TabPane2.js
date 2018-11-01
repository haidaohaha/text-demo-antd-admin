import React from 'react';
export default class TabPane2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0 };
    }

    componentDidMount() {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val); // 输出的还是更新前的值 --> 0
    }
    
    render() {
        return <div>{`Counter is: ${this.state.val}`}</div>;
    }
}
