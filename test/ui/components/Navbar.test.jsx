import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from '../../../src/ui/components/Navbar'
import { useAuth } from '../../../src/hooks/useAuth'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../../src/hooks/useAuth')

describe('Pruebas en <Navbar /> ', () => {
  it('debe demostrar el nombre del usuario', () => {
    useAuth.mockReturnValue({
      logged: true,
      user: {
        name: 'Juan'
      }
    })
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // screen.debug()

    expect(screen.getByText('Juan')).toBeTruthy()
  })

  it('debe de llamar el logout y  navigate cuando se hace click en el botón ', () => {

  })
})
