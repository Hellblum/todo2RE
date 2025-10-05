import Button from "../Button/Button";

const Header = () => {
  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return(
    <div style={{width: "1200px", padding:"1rem", display:"flex", justifyContent:"space-between"}}>
      <h1>To-do2.0 RE</h1>
      <Button onClick={() => logout()}>Log out</Button>
    </div>
  )
}

export default Header