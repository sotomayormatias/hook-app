import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Tests on userCounter', () => { 
  test('should return deafult values', () => { 
    const { result } = renderHook(() => useCounter());
    const { counter, plusOne, lessOne, reset } = result.current;

    expect(counter).toBe(0);
    expect(plusOne).toEqual(expect.any(Function));
    expect(lessOne).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should set initial value by param', () => { 
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('should increment one on counter when plusOne', () => { 
    const { result } = renderHook(() => useCounter(100));
    const { plusOne } = result.current;

    act(() => {
      plusOne();
    });

    expect(result.current.counter).toBe(101);
   });

   test('should decrement one on counter when lessOne', () => { 
    const { result } = renderHook(() => useCounter(100));
    const { lessOne } = result.current;

    act(() => {
      lessOne();
    });

    expect(result.current.counter).toBe(99);
   });

   test('should reset counter when reset', () => { 
    const { result } = renderHook(() => useCounter(100));
    const { plusOne, reset } = result.current;

    act(() => {
      plusOne();
      reset();
    });

    expect(result.current.counter).toBe(100);
   });
 })