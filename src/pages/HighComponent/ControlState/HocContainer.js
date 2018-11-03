import React from 'react';

const HocContainer = WrappedComponent =>
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                name: ''
            };
        }

        onNameChange = event => {
            this.setState({
                name: event.target.value
            });
        };

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            };

            return <WrappedComponent {...this.props} {...newProps} />;
        }
    };

export default HocContainer;
