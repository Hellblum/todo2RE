import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import AuthForm from './AuthForm'

const AuthModal = ({ open, onClose, onAuthSuccess }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ mode, setMode ] = useState('login')
  
  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      const url = mode === 'login'
      ? 'http://localhost:3000/auth/login'
      : 'http://localhost:3000/auth/registration'

      const res = await fetch(url, {
					method: 'POST',
					body: JSON.stringify({ username, password }),
					headers: { 'Content-Type': 'application/json' },
				})
				if (!res.ok) {
					throw new Error(`Error: ${res.status} ${res.statusText}`);
				}
        const data = await res.json()
        if (data.token) {
          localStorage.setItem('token', data.token)
          onAuthSuccess()
          onClose()
        }
    } catch (err) {
      console.error(err)
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