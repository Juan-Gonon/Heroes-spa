import { describe, expect, it } from 'vitest'
import { getHeroesByPublisher } from '../../../src/heroes/helpers/getHeroesByPublisher'

describe('Prueba en getHeroesByPublisher', () => {
  it('debe de devolver arreglo de hero con el publisher DC Comics', () => {
    const publisher = 'DC Comics'

    const listHeros = getHeroesByPublisher({ publisher })
    const dcPublisher = listHeros.every((hero) => hero.publisher === publisher)

    expect(dcPublisher).toBeTruthy()
  })

  //   it('debe de regresar un error si no es un publisher válido ', () => {
  //     const publisher = 'dc Spider'

  //     const listHeros = getHeroesByPublisher({ publisher })

//     console.log(listHeros)
//   })s
})
