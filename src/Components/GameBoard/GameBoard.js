import React from 'react'

import './GameBoard.css'

import { ReactComponent as BoardImage } from '../../Images/Board.svg'
import { ReactComponent as DesktopBoardImage } from '../../Images/DesktopBoard.svg'

const GameBoard = () => {
  const MobileGameBoard = () => (
    <div className='gameBoard'>
      <BoardImage />
    </div>
  )

  const DesktopGameBoard = () => (
    <div className='desktopGameBoard'>
      <DesktopBoardImage />
    </div>
  )
  return (
    <DesktopGameBoard />
  )
}

export default GameBoard
