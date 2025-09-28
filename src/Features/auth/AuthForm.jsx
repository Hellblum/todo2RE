import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const AuthForm = (
  { 
    mode = 'login', // 'login' | 'register' ,
    onSubmit,
    username, 
    onUsernameChange, 
    password, 
    onPasswordChange 
  }
) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
      type='text'
      placeholder='username'
      value={username}
      onChange={onUsernameChange}
      />
      <Input
      type='password'
      placeholder='password'
      value={password}
      onChange={onPasswordChange}
      />
      <Button 
        type='submmit'
      >
        { mode === 'login' ? 'Sign in' : 'Sign up'}
      </Button>
    </form>
  )
}

export default AuthForm