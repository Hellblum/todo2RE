import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Tabs from '../Tabs/Tabs'
import classes from './Main.module.css'
import ContentSection from '../ContentSection/ContentSection'
import Input from '../Input/Input'

const Main = () =>{
  const [ inputValue, setInputValue ] = useState('')
  const [ items, setItems] = useState([])

  useEffect(() =>{
    const getTasks= async () =>{
      try{
        const res = await fetch('http://localhost:3000/todos');
        if(!res.ok){
          throw new Error('Can`t get all tasks')
        }
        const data = await res.json()
        setItems(data)
      } catch(error) {
        console.error(error.message)
      }
    }
    getTasks()
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
        {items.map(item => (<li key={item.id}>{item.title}</li>))}
      </ContentSection>  
    </main>
  )
}

export default Main