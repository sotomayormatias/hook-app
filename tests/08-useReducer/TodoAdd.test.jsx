import { fireEvent, render, screen } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { TodoAdd } from "../../src/08-useReducer/TodoAdd";

jest.mock('../../src/hooks/useForm');
jest.mock('../../src/hooks/useCounter');

describe('Tests on <TodoAdd />', () => {
  const mockOnInputChange = jest.fn();
  const mockOnResetForm = jest.fn();
  const mockHandleAction = jest.fn();

  useForm.mockReturnValue({
    formState: {
      description: 'default value'
    },
    onInputChange: mockOnInputChange,
    onResetForm: mockOnResetForm
  });

  beforeEach(()=>{
    jest.clearAllMocks();
  })

  test('Should return default component', () => {
    render(<TodoAdd />);

    expect(screen.getByRole('textbox', {placeholder: 'que hacemos?'}));
    expect(screen.getByRole('button', {name: 'Agregar'}));
  });

  test('Should change value on input', () => {
    render(<TodoAdd />);

    const input = screen.getByRole('textbox', {placeholder: 'que hacemos?'});
    fireEvent.change(input, {target: {value: 'Comprar pan'}});

    expect(mockOnInputChange).toHaveBeenCalled();
  });

  test('Should submit form on clik button', () => {
    render(<TodoAdd handleAction={mockHandleAction} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockHandleAction).toHaveBeenCalled();
  });
})