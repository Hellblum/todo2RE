import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Tabs from '../Tabs/Tabs'
import classes from './Main.module.css'
import ContentSection from '../ContentSection/ContentSection'
import Input from '../Input/Input'
const Main = () =>{
  const [inputValue, setInputValue] = useState('')
  const [ items, setItems] = useState([])
  useEffect(() =>{

    const getTask= async () =>{
      try{
        const res = await fetch('http://localhost:3000/todos');
        if(!res.ok){
          throw new Error('Can`t get all tasks')
        }
        return await res.JSON()
      } catch(error) {
        console.error(error.message)
      }
    }
    getTask()
  }, [])

  const handleClick = () =>{
    if(inputValue !== "") {
      setItems([...items, 
        {
          title: inputValue,
          description: '',
          completed: false
        }
      ])
      setInputValue('')
      console.log(items)
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
        {items.map((item, index) => (<li key={index}>{item.title}</li>))}
      </ContentSection>  
    </main>
  )
}

export default Main