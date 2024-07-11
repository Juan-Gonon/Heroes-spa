import { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export function useAuth () {
  const context = useContext(AuthContext)

  return context
}
