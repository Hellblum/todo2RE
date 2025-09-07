import Button from "../../src/components/Button/Button"
import classes from "./Tabs.module.css"

const Tabs = () => {
  return(
    <div className={classes.tabContainer}>
      <Button>All</Button>
      <Button>Current</Button>
      <Button>Completed</Button>
    </div>
  )
}

export default Tabs