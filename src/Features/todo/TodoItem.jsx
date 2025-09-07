import Button from '../../components/Button/Button'
import Checkbox from '../../components/Checkbox/Checkbox'

const TodoItem = ({ item, onToggle, onDelete}) => {
  return(
    <li>
    <Checkbox 
    checked={item.completed} 
    onChange={() => onToggle(item.id)}
    />
    <p>{item.title}</p>
    <Button
    onClick={() => onDelete(item.id)}
    >Delete</Button>
    </li>
  )
}

export default TodoItem