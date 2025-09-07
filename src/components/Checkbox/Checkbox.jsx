import classes from './Checkbox.module.css'
const Checkbox = ({ onChange, checked }) => {
  return(
    <input 
      type="checkbox"
      onChange={onChange}
      checked={checked}
      className={classes.input}
    />
  )
}
export default Checkbox