import React, {Component} from 'react';

export default class Details extends Component {
    componentWillMount() {
        console.log('componentDidMount Details');
    }

    render() {
        return (
            <div>Details</div>
        );
    }
}