import { Component } from "react"
import '../App.css';

export default class TodoList extends Component {

    render() {
        const todo = this.props.todo;
        const editData = this.props.editData;
        return (
            <div className="todotask" data-testid='todo-task'>
                {editData.editId === todo.id && editData.isEdit ?
                    <>
                        <input placeholder='Update Task' value={editData.editLabel} data-testid={'edit-input'} onChange={(e) => this.props.handleEditTodo(e)} />
                        <div className="todo-func">
                            <button onClick={() => this.props.updateTodo(todo.id)} data-testid={'update-todo'} disabled={editData.editLabel === ""} >Update</button>
                        </div>
                    </>
                    :
                    <>
                        <p className="todo-label">{todo.label}</p>
                        <div className="todo-func">
                            <button onClick={() => this.props.editTodo(todo.id)} data-testid={'edit-todo'}>Edit</button>
                            <button onClick={() => this.props.removeTodo(todo.id)} data-testid={'remove-todo'}>Remove</button>
                        </div>
                    </>
                }

            </div>
        )
    }
}