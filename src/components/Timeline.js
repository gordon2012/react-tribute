import React, {Component} from 'react';
import Entry from './Entry';

class Timeline extends Component {
    render() {
        return (
            <div className="Timeline">
                <h3 style={{textAlign: 'center'}}>Timeline</h3>
                {this.props.timeline.map(entry => (
                    <Entry
                        key={entry.date}
                        date={entry.date}
                        event={entry.event}
                    />
                ))}
            </div>
        );
    }
}

export default Timeline;
