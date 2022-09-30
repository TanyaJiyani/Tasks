import React, { PureComponent } from 'react'
import '../App.css';
import PropTypes from 'prop-types';

export default class TodoInput extends PureComponent {

    render() {

        return (

            <div className='todoform' data-testid='todo-form'>
                <input placeholder='Enter Task' value={this.props.inputTask} onChange={(e) => this.props.handleInputChange(e)} data-testid={'todo-input'} />
                <button onClick={this.props.handleClick} data-testid={'add-todo'} disabled={this.props.inputTask?.trim() === ""}>Add Todo</button>
            </div>

        )
    }
}

TodoInput.propTypes = {
    inputTask: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleClick: PropTypes.func

}


