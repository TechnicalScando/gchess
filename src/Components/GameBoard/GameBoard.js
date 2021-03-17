import React, { useState, useEffect } from 'react'

import './GameBoard.css'

import Square from '../Square/Square'
import Piece from '../Piece/Piece'

import { ItemTypes } from '../../Constants'
import { render } from 'react-dom'

const GameBoard = () => {
  const pieces = [
    {
      type: 'Pawn',
      position: { x: 4, y: 6 }
    },
    {
      type: 'Knight',
      position: { x: 6, y: 7 }
    }
  ]

  const [selectedPiece, setSelectedPiece] = useState({})

  const gameBoard = []
  const key = ''
  const color = 'dark'

  // const canMovePawn = (newX, newY) => {
  //   if (newY === (piecePosition.y - 1) && newX === piecePosition.x) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const canMoveKnight = (newX, newY) => {

  // }

  // const movePawn = (newX, newY) => {
  //   setPiecePosition({ x: newX, y: newY })
  // }

  useEffect(() => {
    console.log(selectedPiece)
  }, [selectedPiece])

  const handleSquareClick = (newX, newY, piece) => {
    if (piece) {
      setSelectedPiece(piece)
    }
    // if (type === 'Pawn') {
    //   if (canMovePawn(newX, newY)) {
    //     movePawn(newX, newY)
    //   }
    // } else if (type === 'Knight') {
    //   if (canMoveKnight(newX, newY)) {
    //     moveKnight(newX, newY)
    //   }
    // }
  }

  const renderSquare = (i) => {
    const key = i
    const x = (i % 8)
    const y = Math.floor((i / 8))

    let color
    (x + y) % 2 === 1 ? color = 'dark' : color = 'light'

    let matchedPiece

    pieces.forEach(piece => {
      if (piece.position.x === x && piece.position.y === y) {
        matchedPiece = <Piece type={piece.type} position={piece.position} />
      }
    })

    gameBoard.push(
      <Square
        key={key}
        x={x}
        y={y}
        className={`square ${color}`}
        piece={matchedPiece}
        handleClick={handleSquareClick}
        // movePawn={movePawn}
      />

    )
  }

  const generateBoard = () => {
    for (let i = 0; i < 64; i++) {
      renderSquare(i)
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
