import { useNavigate } from 'react-router-dom'

export function LoginPage () {
  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/', {
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
