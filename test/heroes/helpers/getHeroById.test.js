import { describe, expect, it } from 'vitest'
import { getHeroById } from '../../../src/heroes/helpers/getHeroById'

describe('Prueba en getHeroById', () => {
  it('debe de regresar un hero ', () => {
    const id = 'dc-superman'

    const hero = getHeroById({ id })

    expect(hero).toEqual(
      {
        id: 'dc-superman',
        superhero: 'Superman',
        publisher: 'DC Comics',
        alter_ego: 'Kal-El',
        first_appearance: 'Action Comics #1',
        characters: 'Kal-El'
      }
    )
  })

  it('debe de regresar undefined ', () => {
    const id = 'not-hero'

    const hero = getHeroById({ id })

    expect(hero).toBeUndefined()
  })
})
