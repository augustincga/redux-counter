import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';

class Counter extends React.Component {

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this._decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this._increment}>+</button>
                </div>
            </div>
        )
    }

    _increment = () => {
       this.props.dispatch({ type: 'INCREMENT' });
    }

    _decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
}

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);