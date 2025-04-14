import classes from './ContentSection.module.css'
const ContentSection = ({children}) => {
  return(
    <ul className={classes.list}>
      {children}
    </ul>
  )
}

export default ContentSection