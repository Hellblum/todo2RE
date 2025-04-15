import classes from './Input.module.css'
const Input = ({ type='text', onChange, value, placeholder }) => {
  return(
    <input 
      type="text" 
      className={classes.input} 
      onChange={onChange} 
      placeholder={placeholder} 
      value={value}
    />
  )
}
export default Input