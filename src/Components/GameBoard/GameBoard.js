import React from 'react'

import './GameBoard.css'

import BoardImage from '../../Images/Board.svg'

const GameBoard = () => {
  return (

    <img className='boardImage' src={BoardImage} alt='chessBoard' />

  )
}

export default GameBoard
