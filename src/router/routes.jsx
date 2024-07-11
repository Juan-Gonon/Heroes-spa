import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from '../heroes/routes/PrivateRoute'

export function MyRoutes () {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/*' element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
        }
        />

      </Routes>

    </>
  )
}
