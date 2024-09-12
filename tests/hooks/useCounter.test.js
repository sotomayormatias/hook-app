import { renderHook } from '@testing-library/react'
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

  

 })