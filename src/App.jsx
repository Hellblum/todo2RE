import './App.css'
import HomePage from './pages/HomePage'
import AuthModal from './features/auth/AuthModal'
import { useState } from 'react'

const App = () => {
  const [ isAuth, setIsAuth ] = useState(false)
  const [ authOpen, setAuthOpen ] = useState(true)
  return (
    <div>
      {isAuth ? (
        <HomePage/>
        ) : (
          <AuthModal 
          open={authOpen} 
          onClose={() => setAuthOpen(false)} 
          onAuthSuccess={() => setIsAuth(true)}
          />
        )}
    </div>
  )
}

export default App
