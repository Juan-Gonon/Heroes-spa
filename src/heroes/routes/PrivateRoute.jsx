import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

// eslint-disable-next-line react/prop-types
export function PrivateRoute ({ children }) {
  const { logged } = useAuth()

  const { pathname, search } = useLocation()
  //   console.log(location)
  const lastPath = pathname + search

  localStorage.setItem('lastPath', lastPath)

  //   console.log(lastPath)

  return (
    logged ? children : <Navigate to='/login' />
  )
}
