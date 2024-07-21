import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { MyRoutes } from '../../src/router/routes'
import { useAuth } from '../../src/hooks/useAuth'

vi.mock('../../src/hooks/useAuth')

describe('Pruebas en <MyRoutes />', () => {
  it('debe de mostrar el login si no está autenticado ', () => {
    const contextValue = {
      logged: false
    }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <MyRoutes />
        </AuthContext.Provider>

      </MemoryRouter>
    )

    // screen.debug()
    expect(screen.getAllByText('Login').length).toBe(2)
  })

  it('debe de mostrar el componente de Marvel si está autenticado ', () => {
    useAuth.mockReturnValue({
      logged: true
    })
    // const contextValue = {
    //   logged: true,
    //   user: {
    //     id: 'ABC',
    //     name: 'Juan'
    //   }
    // }
    render(
      <MemoryRouter initialEntries={['/login']}>
        {/* <AuthContext.Provider value={contextValue}> */}
        <MyRoutes />
        {/* </AuthContext.Provider> */}

      </MemoryRouter>
    )

    // screen.debug()
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
})
