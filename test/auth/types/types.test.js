import { describe, expect, it } from 'vitest'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en Types.js ', () => {
  it('debe de regresar estoy types ', () => {
    // console.log(types)

    expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' })
  })
})
