import React from 'react';

const HocStyleComponent = (WrappedComponent, style) =>
    class extends React.Component {
        render() {
            const newProps = {};
            return (
                <div style={style}>
                    <WrappedComponent {...this.props} {...newProps} />
                </div>
            );
        }
    };

export default HocStyleComponent;
