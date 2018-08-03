import React from 'react';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '极简React片段！'
        };
    }
    render() {
        return <div>Footer</div>;
    }
}
