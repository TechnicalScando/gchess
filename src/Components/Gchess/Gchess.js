import React from 'react'

import './Gchess.css'
import PlayerBar from '../PlayerBar/PlayerBar'
import GameBoard from '../GameBoard/GameBoard'
import ArrowBar from '../ArrowBar/ArrowBar'
import Moves from '../Moves/Moves'

const Gchess = () => {
  const MobileGChess = () => (
    <div className='flexContainer'>
      <div className='bodyDiv'>
        <div className='header'>
          <h1 className='headerText'>gChess</h1>
        </div>
        <PlayerBar
          dynamicClass='playerBarFlex top'
          dynamicClassText='playerBarText'
          dynamicTimerText='playerBarText'
        />
        <GameBoard />
        <PlayerBar
          dynamicClass='playerBarFlex bottom'
          dynamicClassText='playerBarText'
          dynamicTimerText='playerBartext'
        />
        <ArrowBar />
        <Moves />
      </div>
    </div>
  )

  const DesktopGChess = () => (
    <div className='flexContainerDesktop'>
      <div className='bodyDivDesktop'>
        <div className='headerDesktop'>
          <h1 className='headerTextDesktop'>gChess</h1>
        </div>
        <div className='playAreaFlexDesktop'>
          <GameBoard />
          <div className='infoBarDesktop'>
            <PlayerBar
              dynamicClass='playerBarDesktop'
              dynamicClassText='playerBarTextDesktop'
              dynamicTimerText='playerBarTimerTextDesktop'
            />
            <Moves />
            <ArrowBar />
            <PlayerBar
              dynamicClass='playerBarDesktop'
              dynamicClassText='playerBarTextDesktop'
              dynamicTimerText='playerBarTimerTextDesktop'
            />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <DesktopGChess />
  )
}

export default Gchess
