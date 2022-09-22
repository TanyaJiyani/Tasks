import React, { Component } from 'react'
import '../App.css';

export default class TodoInput extends Component {

    render() {

        return (

            <div className='todoform' data-testid='todo-form'>
                <input placeholder='Enter Task' value={this.props.inputTask} onChange={(e) => this.props.handleInputChange(e)} data-testid={'todo-input'} />
                <button onClick={this.props.handleClick} data-testid={'add-todo'}>Add Todo</button>
            </div>

        )
    }
}


