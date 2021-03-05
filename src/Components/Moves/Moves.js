import React, { useContext } from 'react'
import { viewportContext } from '../../App'

import './Moves.css'
import MoveLine from '../MoveLine/MoveLine'

const Moves = () => {
  const width = useContext(viewportContext)
  const breakpoint = 620

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
    width < breakpoint ? <MobileMoves /> : <DesktopMoves />
  )
}

export default Moves
