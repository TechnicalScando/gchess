import React from 'react'

import './Square.css'

const Square = ({ className, piece, x, y, handleClick }) => {
  return (

    <div
      className={className}
      onClick={() => handleClick(x, y)}
    >
      {piece}
    </div>

  )
}

export default Square
