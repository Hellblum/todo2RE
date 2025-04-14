import { useState } from 'react'
import Button from '../Button/Button'
import Tabs from '../Tabs/Tabs'
import classes from './Main.module.css'
import ContentSection from '../ContentSection/ContentSection'
const Main = () =>{
  const [inputValue, setInputValue] = useState('')
  const [ items, setItems] = useState([])
  const handleClick = () =>{
    if(inputValue !== "") {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }
  
  return(
    <main className={classes.main}>
      <section className={classes.section}>
        <input 
          type="text" 
          className={classes.input} 
          onChange={e => setInputValue(e.target.value)} 
          placeholder='Add task' 
          value={inputValue}
        />
        <Button onClick={handleClick}>Add </Button>
      </section>
      <Tabs/>
      <ContentSection>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
      </ContentSection>  
    </main>
  )
}

export default Main