import { describe, expect, it } from 'vitest'
import { getHeroesByName } from '../../../src/heroes/helpers/getHeroesByName'

describe('Prueba en getHeroesByName', () => {
  it('debe de regresar lista de heroes ', () => {
    const name = 'green'

    const listHeroes = getHeroesByName({ name })

    expect(listHeroes.length).toBe(2)
  })

  it('debe regresar arreglo vacío si no se le pasa name ', () => {
    const listHeroes = getHeroesByName({ })

    expect(listHeroes.length).toBe(0)
  })

  it('debe de regresar arreglo vacío si no encuentra el hero', () => {
    const name = 'not found'

    const listHeroes = getHeroesByName({ name })

    expect(listHeroes.length).toBe(0)
  })
})
