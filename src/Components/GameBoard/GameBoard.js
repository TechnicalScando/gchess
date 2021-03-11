import React from 'react'

import './GameBoard.css'

import Square from '../Square/Square'

const GameBoard = () => {
  const gameBoard = []
  let key = ''
  let color = 'dark'

  const generateBoard = () => {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        key = `x: ${x} y: ${y}`
        gameBoard.push(
          <Square
            key={key}
            keyContent={key}
            className={`square ${color}`}
          />)
        color === 'dark' ? color = 'light' : color = 'dark'
      }
      color === 'dark' ? color = 'light' : color = 'dark'
    }
  }

  generateBoard()
  console.log(gameBoard)
  return (
    <div className='gameBoard'>
      {gameBoard.map(row => {
        return row
      })}
    </div>

  )
}

export default GameBoard
