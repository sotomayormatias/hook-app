import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks";

describe('Tests on useFetch', () => {
  test('Should return defatult values', () => {
    const {result} = renderHook(() => useFetch());
    expect(result.current.data).toBeNull();
  });
});