import { useEffect, useState } from 'react'
// import classes from './Todo.module.css'
import { updateTask, getTasks, deleteTask } from '../../services/todoServices'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [ items, setItems] = useState([])

  useEffect(() =>{
    const loadTasks = async () =>{
      try{
        const data = await getTasks()
        setItems(data)
      } catch(error) {
        console.error(error.message)
      }
    }
    loadTasks()
  }, [])

  const onToggle = async (id) => {
    const item = items.find(item => item.id === id)
    const saved = await updateTask(id, {completed: !item.completed })
    if(saved){
      setItems(items.map(item => (item.id === id ? saved : item)))
    }
  }
  const onSave = async (id, newTitle, newDescription) => {
    const item = items.find(item => item.id === id)
    const saved = await updateTask(id, {
      title: newTitle, 
      description: newDescription, 
      completed: item.completed
    })
    if(saved){
      setItems(items.map(item => (item.id === id ? saved : item)))
    }
  }

  const onDelete = async (id) => {
    const deleted = await deleteTask(id)
    if(deleted) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  return(
    <>
    <TodoForm 
      setItems={setItems}/>
      <ul>
        {items.map(item =>
          <TodoItem 
            key={item.id}
            item={item}
            onToggle={onToggle}
            onSave={onSave}
            onDelete={onDelete}
          />
        )}
      </ul>
    </>
  )
}

export default TodoList
