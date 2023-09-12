import React from 'react'

const GrandSon = ({info}) => {
  return (
    <div className='gson'>
    <div>GrandSon</div>
    <div>{info?.onlyForGrandChildren()}</div>
    <div>{info?.familyName}</div>
    </div>
  )
}

export default GrandSon