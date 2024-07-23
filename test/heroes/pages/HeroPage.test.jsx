import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { HeroPage } from '../../../src/heroes/pages'
import { MemoryRouter } from 'react-router-dom'

describe('Prueba en <HeroPage /> ', () => {
  it('debe de llevar a marvel ', () => {
    render(
      <MemoryRouter>
        <HeroPage />
      </MemoryRouter>
    )

    screen.debug()
  })
})
