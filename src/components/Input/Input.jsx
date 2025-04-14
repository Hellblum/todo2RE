const Input = () => {
  return(
    <input type="text" className={classes.input} onChange={handleSetValue} placeholder='Add task' value={value}/>
  )
}
export default Input