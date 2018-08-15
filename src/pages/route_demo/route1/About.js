import React from 'react';
export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>this is about</div>;
    }
}
