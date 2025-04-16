import classes from './Input.module.css'
const Input = ({ type='text', onChange, value, placeholder }) => {
  return(
    <input 
      type={type}
      className={classes.input} 
      onChange={onChange} 
      placeholder={placeholder} 
      value={value}
    />
  )
}
export default Input