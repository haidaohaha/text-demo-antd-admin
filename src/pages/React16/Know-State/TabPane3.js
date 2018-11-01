import React from 'react';
export default class TabPane3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0 };
    }

    changeValue = () => {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val); // 输出的是更新后的值 --> 1
    };

    componentDidMount() {
        document.body.addEventListener('click', this.changeValue, false);
    }

    render() {
        return <div>{`Counter is: ${this.state.val}`}</div>;
    }
}
