import React, { Component } from 'react'
import './App.css';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoList: [],
      inputTask: '',
      editData: {
        isEdit: false,
        editId: '',
        editLabel: ''
      }
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputTask: e.target.value })
  }

  addTodo = () => {
    if (this.state.inputTask === "") return;
    const id = this.state.todoList.length
    const newTodo = { id: id, label: this.state.inputTask?.trim() }
    this.setState((state) => ({
      todoList: [...state.todoList, newTodo],
      inputTask: ''
    }))
  }

  removeTodo = (id) => {
    const updatedTodoList = this.state.todoList.filter((todo) => todo.id !== id)
    this.setState({ todoList: updatedTodoList })
  }

  updateTodo = (id) => {
    const matchIndex = this.state.todoList.findIndex(task => task.id === id)
    const newList = [...this.state.todoList];
    newList[matchIndex].label = this.state.editData.editLabel

    this.setState((state) => ({
      ...state,
      todoList: newList,
      editData: { editLabel: '', isEdit: false, editId: '' }
    }))
  }

  editTodo = (id) => {
    const arr = this.state.todoList.filter((todo) => todo.id === id)
    this.setState({
      editData: { editLabel: arr[0]?.label, isEdit: true, editId: id }
    })
  }

  handleEdit = (e) => {
    console.log("IN EDIT")
    this.setState((state) => ({
      editData: { ...state.editData, editLabel: e.target.value }
    }))
  }

  handleEditTodo = debounce(this.handleEdit, 1000)

  render() {
    return (
      <div className='App'>
        <div className='todo'>
          <h1>Todo List</h1>
          <TodoInput inputTask={this.state.inputTask} handleInputChange={this.handleInputChange} handleClick={this.addTodo} />
          <div className="todoList" data-testid='todo-list'>

            {this.state.todoList?.length > 0 && <TodoList todoList={this.state.todoList} editData={this.state.editData} removeTodo={this.removeTodo} editTodo={this.editTodo} handleEditTodo={this.handleEditTodo} updateTodo={this.updateTodo} />}

          </div>
        </div>
      </div>
    )
  }
}



