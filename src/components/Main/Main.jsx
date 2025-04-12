import Button from '../Button/Button'
import classes from './Main.module.css'
const Main = () =>{
  return(
    <main className={classes.main}>
      <input type="text" className={classes.input} placeholder='Add task'/>
      <Button style={{margin: '0 auto'}}>Add </Button>
    </main>
  )
}

export default Main