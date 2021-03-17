import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './Gchess.css'
import PlayerBar from '../PlayerBar/PlayerBar'
import GameBoard from '../GameBoard/GameBoard'
import ArrowBar from '../ArrowBar/ArrowBar'
import Moves from '../Moves/Moves'

const Gchess = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flexContainer'>
        <div className='header'>
          <h1 className='headerText'>gChess</h1>
        </div>
        {/* mobile layout */}
        <div className='mobileLayout'>
          <PlayerBar
            dynamicClass='playerBarFlex top'
            dynamicClassText='playerBarText'
            dynamicTimerText='playerBarText'
          />
          <GameBoard />
          <PlayerBar
            dynamicClass='playerBarFlex bottom'
            dynamicClassText='playerBarText'
            dynamicTimerText='playerBarText'
          />
          <ArrowBar />
          <Moves />
        </div>
        {/* Desktop layout */}
        <div className='desktopLayout'>
          <GameBoard />
          <div className='infoBar'>
            <PlayerBar
              dynamicClass='playerBarFlex top'
              dynamicClassText='playerBarText'
              dynamicTimerText='playerBarText'
            />
            <Moves />
            <ArrowBar />
            <PlayerBar
              dynamicClass='playerBarFlex bottom'
              dynamicClassText='playerBarText'
              dynamicTimerText='playerBarText'
            />
          </div>
        </div>
      </div>
    </DndProvider>
  )
}

export default Gchess
