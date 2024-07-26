import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

const useNavigateMock = vi.fn()
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal('react-router-dom')

  return {
    ...actual,
    useNavigate: () => useNavigateMock
  }
})

describe('Pruebas en <SearchPage /> ', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('debe de mostrarse correctamente con valores por defecto ', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it('debe de mostrar a Batman y el input con el valor del queryString ', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const inputValue = screen.getByRole('textbox')
    const img = screen.getByRole('img')
    const divHero = container.querySelector('[aria-label="msg-search-hero"]')

    expect(inputValue.value).toBe('batman')
    expect(img.src).toContain('/src/assets/heroes/dc-batman.jpg')
    expect(divHero.style.display).toBe('none')
    screen.debug()
  })

  it('debe de mostrar un error si no se encuentra el hero (batman123) ', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )
    const divNotHero = screen.getByLabelText('alert-not-hero')

    // console.log(divNotHero.style)
    expect(divNotHero.style.display).not.contain('none')
  })

  it('debe de llamar el navigate a la pantalla nueva ', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox', { name: 'searchText' })
    const form = screen.getByRole('form', { name: 'form-event' })
    fireEvent.change(input, { target: { name: 'searchText', value: 'batman' } })
    fireEvent.submit(form)

    expect(useNavigateMock).toHaveBeenCalledWith('?q=batman')
  })
})
