import React from 'react';
export default class TabPane3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0 };
    }

    componentDidMount() {
        setTimeout(_ => {
            this.setState({ val: this.state.val + 1 });
            console.log(this.state.val); // 输出更新后的值 --> 1
        }, 0);
    }

    render() {
        return <div>{`Counter is: ${this.state.val}`}</div>;
    }
}
