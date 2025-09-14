import { useState } from 'react'
import Button from '../../components/Button/Button'
import Checkbox from '../../components/Checkbox/Checkbox'
import Modal from '../../components/Modal/Modal'
const TodoItem = ({ item, onToggle, onDelete}) => {
  const [ open, setOpen ] = useState(false)

  const editOpen = () => {
    setOpen(true)
  }
  const editClose = () => {
    setOpen(false)
  }

  return(
    <li>
    <Checkbox 
    checked={item.completed} 
    onChange={() => onToggle(item.id)}
    />
    <p onClick={editOpen}>{item.title}</p>
    <Button
    onClick={() => onDelete(item.id)}
    >Delete</Button>
    
    <Modal open={open} onClose={() => setOpen(false)}>
      <h2>Modal window is work now</h2>
      <p>{item.description}</p>
      <Button onClick={editClose}>X</Button>
    </Modal>
    </li>
  )
}

export default TodoItem