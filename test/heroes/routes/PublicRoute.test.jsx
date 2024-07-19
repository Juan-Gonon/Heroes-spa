import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PublicRoute } from '../../../src/heroes/routes/PublicRoute'
import { useAuth } from '../../../src/hooks/useAuth'

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

  })
})
