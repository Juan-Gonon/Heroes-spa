import { AuthProvider } from './auth'
import { MyRoutes } from './router/routes'

function App () {
  return (
    <>
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>

    </>
  )
}

export default App
