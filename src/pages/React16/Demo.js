import React from 'react';
export default class Demo extends React.Component {
    /**
     * 这个组件有什么问题。为什么？要如何解决呢？
     */
    // 这里的问题是在 React 中 event 是一个 SyntheticEvent，
    // 如果和它的交互被延迟了（例如：通过 setTimeout），
    // 事件会被清除并且 .target.value引用不会再有效。

    state = { search: '' };
    handleChange = event => {
        /**
         * 这是“防抖”函数的简单实现，它会以队列的方式在 250 ms 内调用
         * 表达式并取消所有挂起的队列表达式。以这种方式我们可以在用户停止输
         * 入时延迟 250 ms 来调用表达式。
         */
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.setState({
                search: event.target.value
            });
        }, 250);
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                {this.state.search ? <p>Search for: {this.state.search}</p> : null}
            </div>
        );
    }
}
// export default class Demo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.name = 'MyComponent';
//         this.handleClick2 = this.handleClick1.bind(this);
//     }

//     handleClick1() {
//         alert(this.name);
//     }

//     handleClick3 = () => alert(this.name);
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick1()}>click 1</button>
//                 <button onClick={this.handleClick1}>click 2</button>
//                 <button onClick={this.handleClick2}>click 3</button>
//                 <button onClick={this.handleClick3}>click 4</button>
//             </div>
//         );
//     }
// }
