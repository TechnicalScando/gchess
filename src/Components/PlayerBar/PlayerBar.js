import React from 'react'

import './PlayerBar.css'

const PlayerBar = ({ dynamicClass, dynamicClassText, dynamicTimerText }) => {
  return (
    <div className={dynamicClass}>
      <h1 className={dynamicClassText}>playerName</h1>
      <h1 className={dynamicTimerText}>00:00</h1>
    </div>
  )
}

export default PlayerBar
