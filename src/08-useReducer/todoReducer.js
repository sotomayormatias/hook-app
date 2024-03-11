export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'add Todo':
      return [
        ...initialState,
        action.payload,
      ];

    case 'delete Todo':
      return initialState.filter(el => el.id !== action.payload.id);

    case 'toggle Todo':
      return initialState.map(todo => {
        if (todo.id === action.payload.id) todo.done = !todo.done;

        return todo;
      })
  
    default:
      return initialState;
  }
}