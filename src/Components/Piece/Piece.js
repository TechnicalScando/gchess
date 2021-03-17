import React from 'react'

import './Piece.css'

import { ReactComponent as Pawn } from '../../Images/pawnWhite.svg'
import { ItemTypes } from '../../Constants'
import { useDrag } from 'react-dnd'

const Piece = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PAWN,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
      className='dragDiv'
    >
      <Pawn className='piece' />
    </div>
  )
}

export default Piece
