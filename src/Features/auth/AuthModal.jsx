import { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const AuthModal = ({ open, onClose, onAuthSuccess }) => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const handleLogin = async () => {
    try{
      const res = await fetch('http://localhost:3000/auth/login', {
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
      <Input 
        type='text' 
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input 
        type='password' 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
      onClick={handleLogin}
      >Accept</Button>
    </Modal>
  )
}
export default AuthModal