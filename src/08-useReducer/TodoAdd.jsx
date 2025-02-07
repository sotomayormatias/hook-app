import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({handleAction}) => {
  const {formState, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const {description} = formState;

  const onformSubmit = (e) => {
    e.preventDefault();
    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    handleAction(newTodo);
    onResetForm();
  }

  return (
    <form
      onSubmit={onformSubmit}
      role='form'
    >
      <input
        type="text"
        placeholder='que hacemos?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className='btn btn-primary mt-1'
      >
        Agregar
      </button>
    </form>
  )
}
