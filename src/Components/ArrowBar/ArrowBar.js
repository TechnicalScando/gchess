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
        <button className='arrowButton'><BackArrow /></button>
        <button className='arrowButton'><BegginingArrow /></button>
      </div>
      <div className='arrowBar right'>
        <button className='arrowButton'><EndArrow /></button>
        <button className='arrowButton'><ForwardArrow /></button>
      </div>
    </div>
  )
}

export default ArrowBar
