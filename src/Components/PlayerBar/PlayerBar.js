import React from 'react'

import './PlayerBar.css'

const PlayerBar = ({ dynamicClass }) => {
  return (
    <div className={dynamicClass}>
      <h1 className='playerBarText'>playerName</h1>
      <h1 className='playerBarText'>00:00</h1>
    </div>
  )
}

export default PlayerBar
