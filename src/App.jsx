import { useState } from 'react'
import './index.css'
import Form from './form'


function App() {
  const [tasks, setTasks] = useState([])

  

  const putTasks = (value) => {
    if (value) {
      setTasks([...tasks, {id: Date.now(), text: value, done: false}])
    } else {
      alert("Введите задачу")
    }
  }

  const toggleTasks = (id) => {
    setTasks(tasks.map(tasks => {
      if (tasks.id !== id) return tasks;

      return {
        ...tasks,
        done: !tasks.done
      }
    }))
  }

  const removeTasks = (id) => {
    setTasks(tasks.filter(tasks => tasks.id !== id))
  }

  

  return (
    <>
      <Form putTasks={putTasks} />
        <ul>
          {
            tasks.map(tasks => {
              return (
                <li>
                  <p className={tasks.done ? "tasks done" : "tasks"} key={tasks.id}>{tasks.text}</p>
                  <div>
                    <button className={tasks.done ? 'back' : 'done-button'} key={tasks.id} onClick={() => toggleTasks(tasks.id)}>{tasks.done ? 'Восстановить' : 'Завершить'}</button>
                    <button className='delete' onClick={e => {
                      e.stopPropagation();
                      removeTasks(tasks.id);
                    }}>Удалить</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
    </>
  )
}

export default App
