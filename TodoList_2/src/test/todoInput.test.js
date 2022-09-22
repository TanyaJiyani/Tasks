import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders TodoInput Component', () => {
    render(<App />);
    const todoInputContainer = screen.getByTestId("todo-form");

    expect(todoInputContainer).toBeInTheDocument()
});

describe('Testing App Counter functionality', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = render(<App />);
    });

    test('Change Todo Input and Create new Todo', () => {
        const input = wrapper.getByTestId("todo-input");
        const addTodoBtn = wrapper.getByTestId("add-todo");

        fireEvent.change(input, { target: { value: 'task1' } })
        expect(input.value).toBe('task1')

        fireEvent.click(addTodoBtn)

        const todos = wrapper.getAllByTestId('todo-task');
        const todoList = wrapper.getByTestId('todo-task');
        const todoNameElement = todoList.firstChild;

        expect(todoNameElement.textContent).toBe('task1');
        expect(input.value).toBe('');
        expect(todos.length).toBe(1);
    })

    test('Update a todo', () => {

        const input = wrapper.getByTestId("todo-input");
        const addTodoBtn = wrapper.getByTestId("add-todo");

        fireEvent.change(input, { target: { value: 'task1' } })
        expect(input.value).toBe('task1')

        fireEvent.click(addTodoBtn);

        const editTodoBtn = wrapper.getByTestId("edit-todo");
        fireEvent.click(editTodoBtn)

        const editInput = wrapper.getByTestId("edit-input");
        const updateTodoBtn = wrapper.getByTestId("update-todo");

        expect(editInput.value).toBe('task1')

        fireEvent.change(editInput, { target: { value: 'task1 changed' } })
        expect(editInput.value).toBe('task1 changed')

        fireEvent.click(updateTodoBtn);

        const todoList = wrapper.getByTestId('todo-task');
        const todoNameElement = todoList.firstChild;

        expect(todoNameElement.textContent).toBe('task1 changed');

    })

    test('delete a todo', () => {
        const input = wrapper.getByTestId("todo-input");
        const addTodoBtn = wrapper.getByTestId("add-todo");
        fireEvent.change(input, { target: { value: 'task1' } })
        expect(input.value).toBe('task1')
        fireEvent.click(addTodoBtn)


        const todoList = wrapper.getByTestId('todo-task');

        const removeTodoBtn = wrapper.getByTestId('remove-todo')
        fireEvent.click(removeTodoBtn)

        const todos = wrapper.queryAllByTestId('todo-task');

        expect(todoList).not.toBeInTheDocument();
        expect(todos.length).toBe(0)
    })


})

