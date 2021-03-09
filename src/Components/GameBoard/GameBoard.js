import React from 'react'

import './GameBoard.css'

import BoardRow from '../BoardRow/BoardRow'

const GameBoard = () => {
  const gameBoard = []

  const generateBoard = () => {
    let startingColor = 'dark'
    for (let i = 0; i <= 7; i++) {
      console.log(startingColor)
      gameBoard.push(<BoardRow key={`Row: ${i}`} startColor={startingColor} />)
      if (startingColor === 'dark') {
        startingColor = 'light'
      } else {
        startingColor = 'dark'
      }
    }
  }

  generateBoard()
  return (
    <div className='gameBoard'>
      {gameBoard.map(row => {
        return row
      })}
    </div>

  )
}

export default GameBoard
