import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { HeroPage } from '../../../src/heroes/pages'
import { useParams } from 'react-router-dom'

vi.mock('react-router-dom')
// const useParamsMock = vi.fn().mockReturnValue({ id: 'marvel-spider' })

describe('Prueba en <HeroPage /> ', () => {
  afterEach(() => {
    cleanup()
  })
  it('debe de retornar el hero spider ', () => {
    useParams.mockReturnValue({
      id: 'marvel-spider'
    })
    const { container } = render(
      <HeroPage />
    )

    expect(container).toMatchSnapshot()
  })

  it('debe de mostrar la imagen de spider', () => {
    useParams.mockReturnValue({
      id: 'marvel-spider'
    })

    render(
      <HeroPage />
    )

    const img = screen.getByLabelText('img-hero')

    expect(img.src).toContain('/src/assets/heroes/marvel-spider.jpg')
  })

  // it('debe de llamar el navigate', () => {
  //   useParams.mockReturnValue({
  //     id: 'marvel-spider'
  //   })

  //   render(
  //     <HeroPage />
  //   )

  //   const btnPrev = screen.getByRole('button')
  //   fireEvent.click()
  // })
})
