import React, {Component} from 'react';

export default class Entry extends Component {
    render() {
        return (
            <li>
                <strong>{this.props.date}</strong> - {this.props.event}
            </li>
        );
    }
}
