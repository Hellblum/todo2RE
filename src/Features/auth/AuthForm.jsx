import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const AuthForm = (
  { 
    mode = 'login',
    onSubmit,
    username, 
    onUsernameChange, 
    password, 
    onPasswordChange,
    error
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
      { error && (
        <div style={{ color:'red', margin:'8px 0'}}>{ error }</div>
      )}
      <Button 
        type='submit'
      >
        { mode === 'login' ? 'Sign in' : 'Sign up' }
      </Button>
    </form>
  )
}

export default AuthForm