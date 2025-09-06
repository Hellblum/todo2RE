import classes from './Input.module.css'
const Input = ({ type, onChange, placeholder, value }) => {
  return(
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className={classes.input}
    />
  )
}
export default Input