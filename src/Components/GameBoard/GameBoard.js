import React, { useState, useEffect } from 'react'

import './GameBoard.css'

import Square from '../Square/Square'
import Piece from '../Piece/Piece'

const GameBoard = () => {
  const [pieces, setPieces] = useState([
    {
      type: 'Pawn',
      color: 'white',
      position: { x: 4, y: 6 },
      id: 'Pawnwhitex:4y:6'

    },
    {
      type: 'Knight',
      color: 'white',
      position: { x: 6, y: 7 },
      id: 'Knightwhitex:6y:7'
    }
  ]
  )

  const gameBoard = []
  let selectedPiece

  useEffect(() => {
    // console.log(pieces)
  }, [pieces])

  const canMovePawn = (newX, newY, piece) => {
    if (newY === (piece.position.y - 1) &&
    newX === piece.position.x) {
      return true
    } else {
      return false
    }
  }

  const canMoveKnight = (newX, newY, piece) => {
    const pieceX = piece.position.x
    const pieceY = piece.position.y

    if ((Math.abs(newX - pieceX) === 2 && Math.abs(newY - pieceY) === 1) ||
    (Math.abs(newX - pieceX) === 1 && Math.abs(newY - pieceY) === 2)) {
      return true
    } else {
      return false
    }
  }

  const canMoveBishop = (newX, newY, piece) => {
    console.log(`Can move bishop? type:${piece.type} color:${piece.color} position:${piece.position.x},${piece.position.y} id:${piece.id}`)
  }

  const canMoveRook = (newX, newY, piece) => {
    console.log(`Can move Rook? type:${piece.type} color:${piece.color} position:${piece.position.x},${piece.position.y} id:${piece.id}`)
  }

  const canMoveKing = (newX, newY, piece) => {
    console.log(`Can move King? type:${piece.type} color:${piece.color} position:${piece.position.x},${piece.position.y} id:${piece.id}`)
  }

  const canMoveQueen = (newX, newY, piece) => {
    console.log(`Can move Queen? type:${piece.type} color:${piece.color} position:${piece.position.x},${piece.position.y} id:${piece.id}`)
  }

  const selectCanMove = ({ type }) => {
    let returnFunc

    switch (type) {
      case 'Pawn':
        returnFunc = canMovePawn
        break
      case 'Knight':
        returnFunc = canMoveKnight
        break
      case 'Bishop':
        returnFunc = canMoveBishop
        break
      case 'Rook':
        returnFunc = canMoveRook
        break
      case 'King':
        returnFunc = canMoveKing
        break
      case 'Queen':
        returnFunc = canMoveQueen
        break
      default:
        break
    }

    return returnFunc
  }

  const movePiece = (newX, newY, { piece }) => {
    const canMove = selectCanMove(piece)
    if (canMove(newX, newY, piece)) {
      changePiecePosition(newX, newY, piece)
    }
  }

  const changePiecePosition = (newX, newY, pieceToChange) => {
    setPieces(
      pieces.map(piece => {
        if (piece.id === pieceToChange.id) {
          return Object.assign({}, piece, {
            position: { x: newX, y: newY },
            id: `${piece.type}${piece.color}x:${newX}y:${newY}`
          })
        } else {
          return piece
        }
      })
    )
  }

  const handleSquareClick = (newX, newY, piece) => {
    if (piece) {
      selectedPiece = piece
    }

    if (!piece && selectedPiece) {
      movePiece(newX, newY, selectedPiece)
      console.log(newX, newY, selectedPiece)
    }
  }

  const handleDrop = (id, x, y) => {
    let pieceToMove

    pieces.forEach(piece => {
      if (piece.id === id) {
        pieceToMove = piece
      }
    })
    if (pieceToMove) {
      changePiecePosition(x, y, pieceToMove)
      console.log(x, y, pieceToMove)
    }
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
        matchedPiece =
          <Piece
            piece={piece}
          />
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
        handleDrop={handleDrop}
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
