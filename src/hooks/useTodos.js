import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const initialState = [];
  
  const init = () => (JSON.parse(localStorage.getItem('todos')) || []);
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  const handleNewTodo = (todo) => {
    const action = {
      type: 'add Todo',
      payload: todo
    }

    dispatch(action);
  };

  const handleDeleteTodo = (todo) => {
    const action = {
      type: 'delete Todo',
      payload: todo
    }

    dispatch(action);
  };

  const handleToggleTodo = (todo) => {
    const action = {
      type: 'toggle Todo',
      payload: todo
    }

    dispatch(action);
  };
  
  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
  }
}
