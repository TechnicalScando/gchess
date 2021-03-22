import React from 'react'

import './Piece.css'

import { ReactComponent as Pawn } from '../../Images/pawnWhite.svg'
import { ReactComponent as Knight } from '../../Images/knightWhite.svg'
import { ItemTypes } from '../../Constants'
import { useDrag } from 'react-dnd'

const Piece = ({ piece }) => {
  const [, drag] = useDrag(() => ({

    type: ItemTypes.PIECE,
    item: { id: piece.id }

  }))

  let renderedPiece

  if (piece.type === 'Pawn') {
    renderedPiece = <Pawn className='piece' />
  } else if (piece.type === 'Knight') {
    renderedPiece = <Knight className='piece' />
  }
  return (
    <div
      ref={drag}
      className='dragDiv'
    >
      {renderedPiece}
    </div>
  )
}

export default Piece
