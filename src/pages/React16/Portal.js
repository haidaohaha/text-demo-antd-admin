import React from 'react';
import ReactDOM from 'react-dom';
import './Portal.less';
const modalRoot = document.querySelector('#modal');
console.log('svip-Portal', modalRoot);

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'Portal的使用！',
        };
        this.el = document.createElement('div');
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    handleClose = () => [this.props.onClose && this.props.onClose()];
    render() {
        const { visible } = this.props;
        if (!visible) return null;

        return ReactDOM.createPortal(
            <div className="Submodal">
                {this.props.children}
                <span onClick={this.handleClose}>[x]</span>
            </div>,
            this.el
        );
    }
}
