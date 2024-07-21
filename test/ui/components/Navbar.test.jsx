import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from '../../../src/ui/components/Navbar'
import { useAuth } from '../../../src/hooks/useAuth'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../../src/hooks/useAuth')

describe('Pruebas en <Navbar /> ', () => {
  const logout = vi.fn()
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })
  useAuth.mockReturnValue({
    logout,
    user: {
      name: 'Juan'
    }
  })

  it('debe demostrar el nombre del usuario', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // screen.debug()

    expect(screen.getByText('Juan')).toBeTruthy()
  })

  it('debe de llamar el logout y  navigate cuando se hace click en el botón ', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // screen.debug()
    const button = screen.getByRole('button', { name: 'btn-logout' })

    fireEvent.click(button)
    expect(logout).toBeCalled()
  })
})
