import { describe, expect, it, vi } from 'vitest'
import { PrivateRoute } from '../../../src/heroes/routes/PrivateRoute'
import { render, screen } from '@testing-library/react'
import { useAuth } from '../../../src/hooks/useAuth'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../../src/hooks/useAuth')

describe('Prueba en el <PrivateRoutes />', () => {
  it('debe de mostrar el children si está autenticado ', () => {
    useAuth.mockReturnValue({
      logged: true
    })
    render(
      <MemoryRouter>
        <PrivateRoute>
          <h1>Private Route</h1>
        </PrivateRoute>
      </MemoryRouter>
    )

    // screen.debug()

    expect(screen.getByText('Private Route')).toBeTruthy()
  })
})
