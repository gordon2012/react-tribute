import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="Card" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
