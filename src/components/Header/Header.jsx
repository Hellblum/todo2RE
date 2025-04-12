import Button from "../Button/Button"
import classes from "./Header.module.css"

const Header = () => {
  return(
    <header className={classes.general}>
      <h2>Todo2.0 RE</h2>
      <Button>Log uot</Button>
    </header>
  )
}

export default Header