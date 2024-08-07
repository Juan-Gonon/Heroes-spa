import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

// eslint-disable-next-line react/prop-types
export function PublicRoute ({ children }) {
  const { logged } = useAuth()
  return (
    !logged ? children : <Navigate to='/marvel' />
  )
}
