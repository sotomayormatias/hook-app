import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Tests on <TodoItem />', () => {
  const mockHandleDelete = jest.fn();
  const mockHandleToggle = jest.fn();

  const props = {
    todo: {
      id: 1,
      description: 'description todo mock',
      done: false
    },
    handleDelete: mockHandleDelete,
    handleToggle: mockHandleToggle
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should return default component', () => {
    render(<TodoItem {...props}/>);

    expect(screen.getByText('description todo mock'));
  });

  test('Should call handleToggle on span click', () => {
    render(<TodoItem {...props}/>);

    const spanTodo = screen.getByText('description todo mock');
    fireEvent.click(spanTodo);

    expect(mockHandleToggle).toHaveBeenCalledWith(props.todo);
  });

  test('Should call handleDelete on button click', () => {
    render(<TodoItem {...props}/>);

    const buttonDelete = screen.getByRole('button');
    fireEvent.click(buttonDelete);

    expect(mockHandleDelete).toHaveBeenCalledWith(props.todo);
  });
})