import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PublicRoute } from '../../../src/heroes/routes/PublicRoute'
import { useAuth } from '../../../src/hooks/useAuth'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

vi.mock('../../../src/hooks/useAuth')

describe('Pruebas en <PublicRoute /> ', () => {
  it('debe de mostrar el children si no está autenticado ', () => {
    useAuth.mockReturnValue({
      logged: false
    })

    render(
      <PublicRoute>
        <h1>Ruta Pública</h1>
      </PublicRoute>
    )

    // screen.debug()
    expect(screen.getByText('Ruta Pública')).toBeTruthy()
  })

  it('debe de navegar si está autenticado ', () => {
    useAuth.mockReturnValue({
      logged: true
    })

    render(
      <MemoryRouter initialEntries={['/login']}>

        <Routes>
          <Route
            path='/marvel' element={
              <h1>Pagina Marvel</h1>
            }
          />

          <Route
            path='/login' element={
              <PublicRoute>
                <h1>Ruta Pública</h1>
              </PublicRoute>
          }
          />
        </Routes>

      </MemoryRouter>
    )

    // screen.debug()
    expect(screen.getByText('Pagina Marvel')).toBeTruthy()
  })
})
