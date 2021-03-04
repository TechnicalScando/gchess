import React from 'react'

import './GameBoard.css'

import { ReactComponent as BoardImage } from '../../Images/Board.svg'

const GameBoard = () => {
  return (
    <div className='gameBoard'>
      <BoardImage />
    </div>
  )
}

export default GameBoard
