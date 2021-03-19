import React, { useEffect } from 'react'
import { useDrop } from 'react-dnd'

import './Square.css'
import { ItemTypes } from '../../Constants'

const Square = ({ className, piece, x, y, handleClick, handleDrop }) => {
  return (

    <div
      className={className}
      onClick={() => piece ? handleClick(x, y, piece.props) : handleClick(x, y)}
      // ref={drop}
    >
      {piece}
    </div>

  )
}

export default Square
