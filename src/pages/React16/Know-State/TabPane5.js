import React from 'react';
export default class TabPane3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: 0 };
    }

    batchUpdates = () => {
        // 以下操作，会合成，最终执行最后一条
        this.setState({ val: this.state.val + 1 });
        this.setState({ val: this.state.val + 1 });
        this.setState({ val: this.state.val + 1 });

        // 解决方法
        this.setState((preState, props) => ({ val: preState.val + 1 }));
    };

    render() {
        return <div onClick={this.batchUpdates}>{`Counter is ${this.state.val}`}</div>;
    }
}
