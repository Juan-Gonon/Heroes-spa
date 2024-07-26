import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from '../../../src/ui/components/Navbar'
import { useAuth } from '../../../src/hooks/useAuth'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = vi.fn()
const logout = vi.fn()

// const actual = vi.importActual('react-router-dom')

vi.mock('../../../src/hooks/useAuth')
// vi.mock('react-router-dom', () => ({
//   ...vi.importActual('react-router-dom'),
//   useNavigate: () => mockedUseNavigate
// }))

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate
  }
})

describe('Pruebas en <Navbar /> ', () => {
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
      <MemoryRouter initialEntries={['/marvel']}>
        <Navbar />
      </MemoryRouter>
    )

    // screen.debug()
    const button = screen.getByRole('button', { name: 'btn-logout' })

    fireEvent.click(button)
    expect(logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
