import React from 'react'
import { useDrop } from 'react-dnd'

import './Square.css'
import { ItemTypes } from '../../Constants'

const Square = ({ className, piece, x, y, handleClick, movePawn }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PAWN,
    drop: () => movePawn(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }), [x, y])
  return (

    <div
      className={className}
      onClick={() => handleClick(x, y)}
      ref={drop}
    >
      {piece}
    </div>

  )
}

export default Square
