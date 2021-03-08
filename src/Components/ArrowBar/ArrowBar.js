import React from 'react'

import './ArrowBar.css'

import { ReactComponent as BackArrow } from '../../Images/BackArrow.svg'
import { ReactComponent as BegginingArrow } from '../../Images/BegginingArrow.svg'
import { ReactComponent as EndArrow } from '../../Images/EndArrow.svg'
import { ReactComponent as ForwardArrow } from '../../Images/ForwardArrow.svg'

const ArrowBar = () => {
  return (
    <div className='arrowBarFlex'>
      <div className='arrowBar left'>
        <button className='arrowButton'>
          <BackArrow className='arrows' />
        </button>
        <button className='arrowButton'>
          <BegginingArrow className='arrows' />
        </button>
      </div>
      <div className='arrowBar right'>
        <button className='arrowButton'>
          <EndArrow className='arrows' />
        </button>
        <button className='arrowButton'>
          <ForwardArrow className='arrows' />
        </button>
      </div>
    </div>
  )
}

export default ArrowBar
