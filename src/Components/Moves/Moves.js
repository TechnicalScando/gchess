import React from 'react'

import './Moves.css'
import MoveLine from '../MoveLine/MoveLine'

const Moves = () => {
  const MobileMoves = () => (
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

  const DesktopMoves = () => (
    <>
      <div className='movesHeaderDesktop'> Moves </div>
      <div className='movesFlexDesktop'>

        <div className='movesListDesktop'>
          <MoveLine />
          <MoveLine />
          <MoveLine />
          <MoveLine />
          <MoveLine />
          <MoveLine />
          <MoveLine />
          <MoveLine />

        </div>
      </div>
    </>
  )

  return (
    <DesktopMoves />
  )
}

export default Moves
