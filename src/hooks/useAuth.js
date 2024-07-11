import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export function useAuth () {
  const { authState = {}, login } = useContext(AuthContext)

  return {
    ...authState,
    login
  }
}
