import { useEffect, useState } from 'react'
import Button from '../../src/components/Button/Button'
import Tabs from '../Tabs/Tabs'
import classes from './Main.module.css'
import ContentSection from '../ContentSection/ContentSection'
import Input from '../../src/components/Input/Input'
import Checkbox from '../../src/components/Checkbox/Checkbox'
import { getTasks } from '../../src/services/todoServices'


const Main = () =>{
  const [ inputValue, setInputValue ] = useState('')
  const [ items, setItems] = useState([])

  useEffect(() =>{
    const loadTasks= async () =>{
      try{
        const data = await getTasks()
        setItems(data)
      } catch(error) {
        console.error(error.message)
      }
    }
    loadTasks()
  }, [])

  const handleClick = async () =>{
    if(inputValue !== "") {
      const newTask = {
        title: inputValue,
        description: '',
        completed: false
      }
      try{
        const res = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          body: JSON.stringify(newTask),
          headers: {
            'content-type': 'application/json'
          }
        })
        if(!res.ok){
          throw new Error('Can`t add new Task')
        }
        const createdTask = await res.json()
        setItems(prev => [...prev, createdTask])
        setInputValue('')
      } catch (error) {
        console.error(error.message)
      }
    }
  }

  // const handleCheckboxChange = async () =>{
  // }

  return(
    <main className={classes.main}>
      <section className={classes.section}>
        <Input
          type='text'
          onChange={(e)  => setInputValue(e.target.value)}
          placeholder={'Enter task'}
          value={inputValue}
        />
        <Button onClick={handleClick}>Add </Button>
      </section>
      <Tabs/>
      <ContentSection>
        {items.map(item => (
        <li key={item.id}>
        <Checkbox
          type="checkbox"
          checked={item.checked}
          // onChange={() => handleCheckboxChange(item.id)}
        />
        {item.title}
        </li>))}
      </ContentSection>  
    </main>
  )
}

export default Main