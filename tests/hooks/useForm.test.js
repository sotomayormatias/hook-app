import { useForm } from '../../src/hooks/useForm';
import { act, fireEvent, renderHook } from "@testing-library/react";

describe('Tests on useForm', () => {
  const initialForm = {
    nickName: 'msotomayor',
    email: 'msotomayor@email.com'
  };

  test('should return default values', () => {
    const { result } = renderHook(() => useForm());
    const { formState } = result.current;

    expect(formState).toEqual({});
  });

  test('should return initial values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState } = result.current;

    expect(formState).toEqual(initialForm);
  });

  test('should change input values', () => {
    const targetInput = {
      target: {
        name: 'email',
        value: 'msotomayor@hotmail.com',
      }
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange(targetInput);
    });

    expect(result.current.formState.email).toEqual(targetInput.target.value);
  });

  test('should reset input values', () => {
    const targetInput = {
      target: {
        name: 'email',
        value: 'msotomayor@hotmail.com',
      }
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange(targetInput);
      onResetForm();
    });

    expect(result.current.formState.email).toEqual(initialForm.email);
  });
});