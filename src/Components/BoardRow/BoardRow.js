import React from 'react'

import './BoardRow.css'
import Square from '../Square/Square'

const BoardRow = (startColor) => {
  const row = []

  const generateRow = ({ startColor }) => {
    console.log(`Row start color: ${startColor}`)
    for (let i = 0; i <= 7; i++) {
      if (startColor === 'dark') {
        row.push(<Square color='dark' key={`Dark Square: ${i}`} />)
        startColor = 'light'
      } else {
        row.push(<Square color='light' key={`Light Square: ${i}`} />)
        startColor = 'dark'
      }
    }
  }

  generateRow(startColor)

  return (
    <div className='row'>
      {row.map(Square => {
        return Square
      })}
    </div>
  )
}

export default BoardRow
