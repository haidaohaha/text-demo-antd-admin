import React from 'react';
export default class ReactStrictMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // componentWillMount() {
    //     console.log('父级，包裹一层React Strict Mode 后, 使用这个生命周期，控制台会警告');
    // }

    render() {
        return <div>React Strict Mode 的使用</div>;
    }
}
