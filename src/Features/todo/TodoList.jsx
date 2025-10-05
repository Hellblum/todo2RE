import { useEffect, useState } from 'react'
import classes from '../../features/todo/Todo.module.css'
import { updateTask, getTasks, deleteTask } from '../../services/todoServices'
import TodoItem from '../../features/todo/TodoItem'
import TodoForm from '../../features/todo/TodoForm'
import TodoFilters from '../../features/todo/TodoFilters'

const TodoList = () => {
  const [ items, setItems] = useState([])
  const [ filter, setFilter] = useState('all')

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
    const saved = await updateTask(id, {
      title: item.title, 
      description: item.description, 
      completed: !item.completed 
    })
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

  const filterItems = items.filter(item => {
    if (filter === 'active') return !item.completed
    if (filter === 'completed') return item.completed
    return true
  })

  return(
    <div className={classes.list}>
      <TodoForm 
      className={classes.todoForm}
      setItems={setItems}/>
      <TodoFilters filter={filter} setFilter={setFilter}/>
      <ul>
        {filterItems.map(item =>
          <TodoItem 
          className={classes.todoItem}
            key={item.id}
            item={item}
            onToggle={onToggle}
            onSave={onSave}
            onDelete={onDelete}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoList
