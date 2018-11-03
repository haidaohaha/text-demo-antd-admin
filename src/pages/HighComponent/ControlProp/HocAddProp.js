import React from 'react';

const HocAddProp = (WrappedComponent, arg) =>
    class extends React.Component {
        render() {
            // 这里可以操作,很多东西 过滤 添加....
            const newProps = {
                arg,
                hocaddprop: '高阶组件属性'
            };

            return <WrappedComponent {...this.props} {...newProps} />;
        }
    };

export default HocAddProp;
