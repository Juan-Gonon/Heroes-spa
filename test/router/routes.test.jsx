import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { MyRoutes } from '../../src/router/routes'

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
})
