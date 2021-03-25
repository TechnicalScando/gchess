import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePiece } from '../../Redux/boardSlice'

import './GameBoard.css'

import Square from '../Square/Square'
import Piece from '../Piece/Piece'

const GameBoard = () => {
  const reduxPieces = useSelector(state => state.board.pieces)
  const dispatch = useDispatch()

  const gameBoard = []
  let selectedPiece

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
    if (type) {
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
    const dispatchObject = {
      piece: pieceToChange,
      x: newX,
      y: newY
    }
    dispatch(changePiece(dispatchObject))
  }

  const handleSquareClick = (newX, newY, piece) => {
    if (piece) {
      selectedPiece = piece
    }

    if (!piece && selectedPiece) {
      movePiece(newX, newY, selectedPiece)
    }
  }

  const handleDrop = (pieceToMove, x, y) => {
    if (pieceToMove) {
      changePiecePosition(x, y, pieceToMove)
    }
  }

  const canDrop = (piece, x, y) => {
    let canMove
    if (piece) {
      canMove = selectCanMove(piece)
    }
    if (canMove) {
      return canMove(x, y, piece)
    }
  }

  const renderSquare = (i) => {
    const key = i
    const x = (i % 8)
    const y = Math.floor((i / 8))

    let color
    (x + y) % 2 === 1 ? color = 'dark' : color = 'light'

    let matchedPiece

    reduxPieces.forEach(piece => {
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
        canDropItem={canDrop}

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
