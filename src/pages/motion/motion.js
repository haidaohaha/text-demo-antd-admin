import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

import PropTypes from 'prop-types';

import './motion.less';

class Montion extends Component {
    static propTypes = {
        x: PropTypes.number
    };

    render() {
        return (
            <TweenOne animation={{ x: 300, delay: 500 }}>
                <div className="demo-box">demo</div>
            </TweenOne>
        );
    }
}

export default Montion;
