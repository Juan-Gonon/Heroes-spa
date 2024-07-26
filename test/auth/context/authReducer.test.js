import { it, expect, describe } from 'vitest'
import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en authReducer ', () => {
  const initialState = { logged: false }
  const user = {
    name: 'Juan',
    id: 1
  }

  it('debe de retornar el estado por defecto ', () => {
    const action = {
      type: 'No se encuentra'
    }

    const newState = authReducer(initialState, action)

    expect(newState).toEqual(initialState)
  })

  it('debe de (login) llamar el login autenticar y establecer el user ', () => {
    const action = {
      type: types.login,
      payload: user
    }
    const newState = authReducer(initialState, action)

    expect(newState.user).toEqual(user)
  })

  it('debe de (logout) borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.login,
      payload: user
    }
    authReducer(initialState, action)
    action.type = types.logout

    const newState = authReducer(initialState, action)

    // expect(user).not.toBe(newState)
    expect(user).not.toEqual(newState)
    expect(newState.logged).toBe(initialState.logged)
  })
})
