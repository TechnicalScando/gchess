import React, { useContext } from 'react'
import { viewportContext } from '../../App'

import './GameBoard.css'

import { ReactComponent as BoardImage } from '../../Images/Board.svg'
import { ReactComponent as DesktopBoardImage } from '../../Images/DesktopBoard.svg'

const GameBoard = () => {
  const width = useContext(viewportContext)
  const breakpoint = 620

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
    width < breakpoint ? <MobileGameBoard /> : <DesktopGameBoard />
  )
}

export default GameBoard
