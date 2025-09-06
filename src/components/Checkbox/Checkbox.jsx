import classes from './Checkbox.module.css'
const Checkbox = ({ onChange, checked, ...props }) => {
  return(
    <input 
      type="checkbox"
      onChange={onChange}
      checked={checked}
      className={classes.input}
      {...props}
    />
  )
}
export default Checkbox