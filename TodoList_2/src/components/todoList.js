import { PureComponent } from "react"
import '../App.css';
import PropTypes from 'prop-types';

export default class TodoList extends PureComponent {


    render() {
        const todoList = this.props.todoList;
        const editData = this.props.editData;
        const editDisable = (editData.editLabel.trim() === "")
        return (
            <>
                {todoList?.map((todo, key) => (
                    <div className="todotask" data-testid='todo-task' key={key}>

                        {editData.editId === todo.id && editData.isEdit ?
                            <>
                                <input placeholder='Update Task' defaultValue={editData.editLabel} data-testid={'edit-input'} onChange={(e) => this.props.handleEditTodo(e)} />
                                <div className="todo-func">
                                    <button onClick={() => this.props.updateTodo(todo.id)} data-testid={'update-todo'} disabled={editDisable} >Update</button>
                                </div>
                            </>
                            :
                            <>
                                <p className="todo-label" data-testid="todo-label">{todo.label}</p>
                                <div className="todo-func">
                                    <button onClick={() => this.props.editTodo(todo.id)} data-testid={'edit-todo'}>Edit</button>
                                    <button onClick={() => this.props.removeTodo(todo.id)} data-testid={'remove-todo'}>Remove</button>
                                </div>
                            </>
                        }
                    </div>

                ))
                }

            </>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    editData: PropTypes.object,
    editTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    updateTodo: PropTypes.func
}