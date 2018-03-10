import { MAKE_MOVE } from './types'

export const makeMove = (row, col) => {
  return {
    type: 'MAKE_MOVE',
    payload: {
      row,
      col
    }
  }
}
