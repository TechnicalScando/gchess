import React from 'react'

import './Gchess.css'
import PlayerBar from '../PlayerBar/PlayerBar'
import GameBoard from '../GameBoard/GameBoard'
import ArrowBar from '../ArrowBar/ArrowBar'
import Moves from '../Moves/Moves'

const Gchess = () => {
  return (
    <div className='flexContainer'>
      <div className='bodyDiv'>
        <div className='header'>
          <h1 className='headerText'>gChess</h1>
        </div>
        <PlayerBar dynamicClass='playerBarFlex top' />
        <GameBoard />
        <PlayerBar dynamicClass='playerBarFlex bottom' />
        <ArrowBar />
        <Moves />
      </div>
    </div>
  )
}

export default Gchess
