import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import AuthForm from './AuthForm'

const AuthModal = ({ open, onClose, onAuthSuccess }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ mode, setMode ] = useState('login')
  const [ error, setError] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!username || !password) {
      setError('Username and password are required')
      return
    }
    if(password.length < 4) {
      setError('Password must be at least 4 characters')
      return
    }
    setError('')
    try{
      const url = mode === 'login'
      ? 'http://localhost:3000/auth/login'
      : 'http://localhost:3000/auth/registration'

      const res = await fetch(url, {
					method: 'POST',
					body: JSON.stringify({ username, password }),
					headers: { 'Content-Type': 'application/json' },
				})
				if (!res.ok) {
          const errData = await res.json()
					throw new Error(errData.message || `Error: ${res.status} ${res.statusText}`);
				}
        const data = await res.json()
        if (data.token) {
          localStorage.setItem('token', data.token)
          onAuthSuccess()
          onClose()
        }
    } catch (err) {
      setError(err.message)
    }
  }

  return(
    <Modal open={open} onClose={onClose}>
      <AuthForm
        mode={mode}
        username={username}
        password={password}
        onUsernameChange={e => setUsername(e.target.value)}
        onPasswordChange={e => setPassword(e.target.value)}
        onSubmit={handleSubmit}
        error={error}
      />
      <div>
        {
          mode === 'login' ? (
            <span>
              Don't have an accout? {' '}
              <button onClick={() => setMode('register')}>Sign up</button>
            </span>
          ) : (
            <span>Already have an account?
              <button onClick={() => setMode('login')}>Sing in</button>
            </span>
          )
        }
      </div>
    </Modal>
  )
}
export default AuthModal