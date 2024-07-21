import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { SearchPage } from '../../../src/heroes/pages/SearchPage'

describe('Pruebas en <SearchPage /> ', () => {
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

  })
})
