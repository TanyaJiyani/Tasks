import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App Component', () => {
  render(<App />);
  const todoApp = screen.getByText(/Todo List/i);
  const TodoListContainer = screen.getByTestId("todo-list");
  const todoInputContainer = screen.getByTestId("todo-form");


  expect(todoApp).toBeInTheDocument();
  expect(TodoListContainer).toBeInTheDocument()
  expect(todoInputContainer).toBeInTheDocument()

});
