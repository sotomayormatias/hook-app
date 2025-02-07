import { fireEvent, render, screen } from "@testing-library/react";
import { useTodos } from "../../src/hooks/useTodos";
import { TodoApp } from "../../src/08-useReducer/TodoApp";

jest.mock('../../src/hooks/useTodos');

describe('Tests on <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      {id: 1, description: 'todo 1', done: false},
      {id: 2, description: 'todo 2', done: true},
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });

  beforeEach(()=>{
    jest.clearAllMocks();
  })

  test('Should return default component', () => {
    render(<TodoApp />);
    expect(screen.getByText('todo 1')).toBeTruthy();
    expect(screen.getByText('todo 2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
})