import { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
// import classes from './Todo.module.css'
import { addTask } from '../../services/todoServices'

const TodoForm = ({ setItems }) =>{
  const [ inputValue, setInputValue ] = useState('')

  const handleClick = async () =>{
    if(inputValue.trim() !== "") {
      const task = {
        title: inputValue,
        description: '',
        completed: false
      }
      try{
        const created = await addTask(task)
        if(created) {
          setItems(prev => [...prev, created])
          setInputValue('')
        }
      } catch (error) {
        console.error(error.message)
      }
    }
  }

  return(
    <>
      <Input
        type='text'
        onChange={(e)  => setInputValue(e.target.value)}
        placeholder={'Enter task'}
        value={inputValue}>
      </Input>
      <Button
        onClick={handleClick}> Add
      </Button>
    </>
  )
}

export default TodoForm