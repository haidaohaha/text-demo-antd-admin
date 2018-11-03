import React from 'react';

const HocComponent = WrappedComponent =>
    class MyContainer extends WrappedComponent {
        render() {
            if (this.props.time && this.state.success) {
                return super.render();
            }

            return <div>倒计时完成了...</div>;
        }
    };

export default HocComponent;
