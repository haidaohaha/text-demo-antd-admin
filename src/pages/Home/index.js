import React from 'react';
import './index.less';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return (
            <div className="home-wrap">
                <p>
                    The reading of all good books is like a conversation with the finest men of past
                    centuries.
                </p>
                <p>读好书，就如同和过去世界上最杰出的人谈话。</p>
            </div>
        );
    }
}
