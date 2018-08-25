import React from 'react';
export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>我就是细节</div>;
    }
}
