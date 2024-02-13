import React, { useState } from 'react'
import './index.css'

const Form = (props) => {
    const [value, setValue] = useState("")

  return (
    <>
    <form onSubmit={e => {
        e.preventDefault();
        props.putTasks(value);
        setValue("");
    }}>
        <h1>Мой список задач</h1>
        <div className='inside'>
          <input type='text' placeholder='Введите вашу задачу...' value={value} onChange={e => setValue(e.target.value)} />
          <button className='delete' type='submit'>Добавить</button>
        </div>
    </form>
    </>
  )
}

export default Form