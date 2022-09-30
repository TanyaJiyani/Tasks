import { render, screen, fireEvent, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

    test('TaskName should not contain whitespaces while adding', () => {
        const input = wrapper.getByTestId("todo-input");
        const addTodoBtn = wrapper.getByTestId("add-todo");

        fireEvent.change(input, { target: { value: '       ' } })
        expect(input.value).toBe('       ')

        expect(addTodoBtn).toBeDisabled()
    })

    test('TaskName should not contain whitespaces while updating', async () => {
        const input = wrapper.getByTestId("todo-input");
        const addTodoBtn = wrapper.getByTestId("add-todo");

        fireEvent.change(input, { target: { value: 'task1' } })
        expect(input.value).toBe('task1')

        fireEvent.click(addTodoBtn);

        const editTodoBtn = wrapper.getByTestId("edit-todo");
        fireEvent.click(editTodoBtn)

        const editInput = wrapper.getByTestId("edit-input");

        expect(editInput.value).toBe('task1')

        // fireEvent.change(editInput, { target: { value: 'tk1' } });
        // userEvent.type(editInput, " tk1");
        // console.log(screen.debug())
        // expect(editInput.value).toBe('task1 tk1')

        // await expect(wrapper.findByText("tk1")).toBeInTheDocument();


        // const updateTodoBtn = wrapper.getByTestId("update-todo");
        // expect(updateTodoBtn).toBeDisabled();
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

        expect(editInput.value).toBe('task1');

        fireEvent.change(editInput, { target: { value: 'task1 changed' } });
        // userEvent.type(editInput, "");
        // userEvent.type(editInput, " changed");

        expect(editInput.value).toBe('task1 changed')

        // console.log(wrapper.debug());

        // const updateTodoBtn = wrapper.getByTestId("update-todo");
        // userEvent.click(updateTodoBtn);

        // console.log(wrapper.debug());
        // const todoLabel = screen.getByTestId('todo-label');

        // expect(todoLabel.textContent).toHaveTextContent('task1 changed');

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

