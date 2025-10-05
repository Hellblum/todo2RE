export const isValid = async () => {
  const token = localStorage.getItem('token')
  if(!token){
    console.log('Token not found')
    window.location.reload();
    return false
  }
  try {
    const res = await fetch('http://localhost:3000/auth/check-token', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if(!res.ok) throw new Error('Invalid token')
    const data = await res.json()
    if(data.valid) {
      return true
    } else {
      localStorage.removeItem('token')
      window.location.reload();
      return false
    }
  } catch (err) {
    console.log(err)
    localStorage.removeItem('token')
    window.location.reload();
    return false
  }
}