import React, { useState } from 'react'

import './GameBoard.css'

import Square from '../Square/Square'
import Piece from '../Piece/Piece'

const GameBoard = () => {
  const [piecePosition, setPiecePosition] = useState({
    x: 5,
    y: 7
  })
  const gameBoard = []
  let key = ''
  let color = 'dark'

  const canMovePawn = (newX, newY) => {
    if (newY === (piecePosition.y - 1) && newX === piecePosition.x) {
      return true
    } else {
      return false
    }
  }

  const movePawn = (newX, newY) => {
    setPiecePosition({ x: newX, y: newY })
  }

  const handleSquareClick = (newX, newY) => {
    if (canMovePawn(newX, newY)) {
      movePawn(newX, newY)
    }
  }

  const generateBoard = () => {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        key = `x: ${x} y: ${y}`

        if (piecePosition.x === x && piecePosition.y === y) {
          gameBoard.push(
            <Square
              key={key}
              x={x}
              y={y}
              className={`square ${color}`}
              piece={<Piece />}
              handleClick={handleSquareClick}
            />

          )
        } else {
          gameBoard.push(
            <Square
              key={key}
              x={x}
              y={y}
              keyContent={key}
              className={`square ${color}`}
              handleClick={handleSquareClick}
            />

          )
        }

        color === 'dark' ? color = 'light' : color = 'dark'
      }
      color === 'dark' ? color = 'light' : color = 'dark'
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
