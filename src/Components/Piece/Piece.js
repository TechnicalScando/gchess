import React from 'react'

import './Piece.css'

import { ReactComponent as Pawn } from '../../Images/pawnWhite.svg'
import { ReactComponent as Knight } from '../../Images/knightWhite.svg'
import { ItemTypes } from '../../Constants'
import { useDrag } from 'react-dnd'

const Piece = (type) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: ItemTypes.PAWN,
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging()
  //   })
  // }))

  let piece
  const pieceType = type.type

  if (pieceType === 'Pawn') {
    piece = <Pawn className='piece' />
  } else if (pieceType === 'Knight') {
    piece = <Knight className='piece' />
  }
  return (
    <div
      // ref={drag}
      // style={{
      //   opacity: isDragging ? 0.5 : 1
      // }}
      className='dragDiv'
    >
      {piece}
    </div>
  )
}

export default Piece
