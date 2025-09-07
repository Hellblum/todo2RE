import Button from "../../src/components/Button/Button"
import classes from "./Header.module.css"

const Header = () => {
  return(
    <header className={classes.general}>
      <h2>To-do2.0 RE</h2>
      <Button>Log out</Button>
    </header>
  )
}

export default Header