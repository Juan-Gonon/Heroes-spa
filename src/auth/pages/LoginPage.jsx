import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function LoginPage () {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleClickLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Juan')
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleClickLogin}>Login</button>
    </div>
  )
}
