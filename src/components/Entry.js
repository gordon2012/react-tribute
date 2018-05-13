import React, {Component} from 'react';

class Entry extends Component {
    render() {
        return (
            <div className="Entry">
                <div className="Entry-date">
                    <strong>{this.props.date}</strong>
                </div>
                <div className="Entry-event">
                    {this.props.event}
                </div>
            </div>
        );
    }
}

export default Entry;
