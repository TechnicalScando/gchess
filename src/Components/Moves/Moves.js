import React from 'react'

import './Moves.css'
import MoveLine from '../MoveLine/MoveLine'

const Moves = () => {
  return (
    <div className='movesFlex'>
      <div className='movesHeader'> Moves </div>
      <div className='movesList'>
        <MoveLine />
        <MoveLine />
        <MoveLine />
        <MoveLine />
      </div>
    </div>
  )
}

export default Moves
