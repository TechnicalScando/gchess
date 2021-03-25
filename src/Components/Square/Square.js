import React from 'react'
import { useDrop } from 'react-dnd'

import './Square.css'
import { ItemTypes } from '../../Constants'

const Square = ({ className, piece, x, y, handleClick, handleDrop, canDropItem }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.PIECE,
    drop: (item, monitor) => {
      handleDrop(item.piece, x, y)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
    canDrop: (item, monitor) => {
      const canItDrop = canDropItem(item.piece, x, y)

      return canItDrop
    }

  }))

  return (

    <div
      className={className}
      onClick={() => piece ? handleClick(x, y, piece.props) : handleClick(x, y)}
      ref={drop}
    >
      {piece}

      {isOver && canDrop && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'green'
        }}
        />
      )}

      {!isOver && canDrop && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'yellow'
        }}
        />
      )}

      {isOver && !canDrop && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: 'red'
        }}
        />
      )}

    </div>

  )
}

export default Square
