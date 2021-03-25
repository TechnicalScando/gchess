import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    pieces: [
      {
        type: 'Pawn',
        color: 'white',
        position: { x: 4, y: 6 },
        id: 'Pawnwhitex:4y:6'

      },
      {
        type: 'Knight',
        color: 'white',
        position: { x: 6, y: 7 },
        id: 'Knightwhitex:6y:7'
      }
    ]
  },
  reducers: {
    changePiece: (state, action) => {
      const pieceToChange = action.payload.piece
      const newX = action.payload.x
      const newY = action.payload.y
      state.pieces.map(piece => {
        if (piece.id === pieceToChange.id) {
          piece.position = { x: newX, y: newY }
          piece.id = `${piece.type}${piece.color}x:${newX}y:${newY}`
          return piece
        } else {
          return piece
        }
      })
    }
  }
})

export const { changePiece } = boardSlice.actions
export default boardSlice.reducer
