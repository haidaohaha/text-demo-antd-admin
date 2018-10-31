// https://zhuanlan.zhihu.com/p/38030418
// 全文观看，上面的文章

import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('svip-组建初始化');
    }

    // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
    // 因为该函数是静态函数，所以取不到 `this`
    // 如果需要对比 `prevProps` 需要单独在 `state` 中维护
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('svip-新API 用于代替 componentWillReceiveProps');
        return null;
    }

    // 判断是否需要更新组件，多用于组件性能优化
    shouldComponentUpdate() {
        console.log('svip-判断是不是要更新组件 - shouldComponentUpdate');
        return true;
    }
    // 组件挂载后调用
    // 可以在该函数中进行请求或者订阅
    componentDidMount() {
        console.log('svip-组件已经挂载 - componentDidMount');
    }

    // getSnapshotBeforeUpdate 用于替换 componentWillUpdate ，
    // 该函数会在 update 后 DOM 更新前被调用，
    // 用于读取最新的 DOM 数据
    // 不过大佬，不建议使用
    getSnapshotBeforeUpdate() {
        console.log('svip-新API 用于代替 componentWillUpdate');
        return null;
    }

    // 组件即将销毁
    // 可以在此处移除订阅，定时器等等
    componentWillUnmount() {
        console.log('svip-组件即将卸载');
    }

    // 组件销毁后调用
    componentDidUnMount() {
        console.log('svip-组件已经卸载');
    }

    // 组件更新后调用
    componentDidUpdate() {
        console.log('svip-组建更新完毕');
    }

    // 我想知道
    componentDidCatch(error, info) {
        console.log('svip-错误处理');
    }

    render() {
        console.log('svip-Lifecycle - render 中');
        return <h1>观察console.log</h1>;
    }

    // UNSAFE_componentWillMount() {
    //     console.log('svip-组建马上就要挂载了 - 废弃');
    // }
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('svip-组件接收父组件的值 - 废弃');
    // }
    // UNSAFE_componentWillUpdate() {
    //     console.log('svip-组件将要更新 - 废弃');
    // }
}
export default Lifecycle;

// react v16.3删掉以下三个生命周期：
// componentWillMount
// componentWillReceiveProps
// componentWillUpdate

// 新增两个生命周期：
// static getDerivedStateFromProps
// getSnapshotBeforeUpdate

// 看出特点了么，都是带有will的钩子。
// 目前React为这几个生命周期钩子提供了别名，分别是：

// UNSAFE_componentWillMount
// UNSAFE_componentWillReceiveProps
// UNSAFE_componentWillUpdate
