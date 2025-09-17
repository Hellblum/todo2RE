import { useState } from 'react'
import Button from '../../components/Button/Button'
import Checkbox from '../../components/Checkbox/Checkbox'
import Modal from '../../components/Modal/Modal'
import Input from '../../components/Input/Input'

const TodoItem = ({ item, onToggle, onSave, onDelete}) => {
  const [ open, setOpen ] = useState(false)
  const [editTitleValue, setTitleValue] = useState(item.title)
  const [editDescriptionValue, setDescriptionValue] = useState(item.description)

  const editOpen = () => {
    setOpen(true)
  }

  const editClose = () => {
    setOpen(false)
  }

  return(
    <li style={{display:"flex", justifyContent:"space-between", gap:"rem", cursor:"pointer"}}>
    <Checkbox 
    checked={item.completed} 
    onChange={() => onToggle(item.id)}
    />
    <p onClick={editOpen}>{item.title}</p>
    <Button
    onClick={() => onDelete(item.id)}
    >Delete</Button>
    
    <Modal 
      open={open} onClose={() => setOpen(false)}>
      <Input 
      type='text'
      onChange={(e) => setTitleValue(e.target.value)} 
      value={editTitleValue}/>
      <Input 
      type='text'
      onChange={e => setDescriptionValue(e.target.value)}
      value={editDescriptionValue}/>
      <Button onClick={() => onSave(item.id, editTitleValue, editDescriptionValue)}>Save</Button>
      <Button onClick={editClose}>Close</Button>
    </Modal>
    </li>
  )
}

export default TodoItem