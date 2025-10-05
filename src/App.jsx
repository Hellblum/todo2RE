import './App.css'
import HomePage from './pages/HomePage'
import AuthModal from './features/auth/AuthModal'
import { useState, useEffect } from 'react'

const App = () => {
  const [ isAuth, setIsAuth ] = useState(false)
  const [ checking, setChecking ] = useState(true)

  useEffect(() =>{
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setChecking(false)
        return
      }
      try {
        const res = await fetch('http://localhost:3000/auth/check-token', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        if(!res.ok) throw new Error('Invalid token')
        const data = await res.json()
        if(data.valid) {
          setIsAuth(true)
        } else {
          localStorage.removeItem('token')
        }
      } catch (err) {
        console.error('Auth check failed', err)
        localStorage.removeItem('token')
      } finally {
        setChecking(false)
      }
    }
    checkAuth()
  }, [])
  if (checking) {
    return <div>Loading...</div> // можна замінити на спінер
  }
  return (
    <div>
      {isAuth ? (
        <HomePage/>
        ) : (
          <AuthModal 
          open={true} 
          onClose={() => {}} 
          onAuthSuccess={() => setIsAuth(true)}
          />
        )}
    </div>
  )
}

export default App
