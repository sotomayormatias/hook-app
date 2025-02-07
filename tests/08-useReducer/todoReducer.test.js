import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Tests on todoReducer', () => {
  const initialSate = [
    {
      id: 1,
      description: 'Demo todo',
      done: false
    }
  ];

  test('sholud return initialState', () => {
    const newState = todoReducer(initialSate, {});

    expect(newState).toBe(initialSate);
  });

  test('sholud add a todo', () => {
    const action = {
      type: 'add Todo',
      payload: {
        id: 2,
        description: 'new todo task',
        done: false
      }
    }
    const newState = todoReducer(initialSate, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('sholud remove a todo', () => {
    const action = {
      type: 'delete Todo',
      payload: {
        id: 1
      }
    }
    const newState = todoReducer(initialSate, action);

    expect(newState.length).toBe(0);
  });

  test('sholud toggle a todo status', () => {
    const action = {
      type: 'toggle Todo',
      payload: {
        id: 1
      }
    }
    const newState = todoReducer(initialSate, action);

    expect(newState.length).toBe(1);
    expect(newState[0].done).toBeTruthy();
  });
});