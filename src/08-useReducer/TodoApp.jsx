import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks/useTodos'


export const TodoApp = () => {
  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleToggleTodo, handleDeleteTodo} = useTodos();

  return (
    <>
      <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <hr/>

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} handleDelete={handleDeleteTodo} handleToggle={handleToggleTodo} />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleAction={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
