import React, { useContext } from 'react'
import { viewportContext } from '../../App'

import './MoveLine.css'

const MoveLine = () => {
  const width = useContext(viewportContext)
  const breakpoint = 620

  const MobileMoveLine = () => (
    <div className='moveLineFlex'>
      <div className='moveNumber'>
      1
      </div>
      <div className='move'>
      e4
      </div>
      <div className='move'>
      e5
      </div>
    </div>
  )

  const DesktopMoveLine = () => (
    <div className='moveLineFlexDesktop'>
      <div className='moveNumberDesktop'>
      1
      </div>
      <div className='moveDesktop'>
      e4
      </div>
      <div className='moveDesktop'>
      e5
      </div>
    </div>
  )

  return (
    width < breakpoint ? <MobileMoveLine /> : <DesktopMoveLine />
  )
}

export default MoveLine
