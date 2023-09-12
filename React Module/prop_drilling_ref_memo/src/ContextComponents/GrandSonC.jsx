import React, { useContext } from 'react'
import { FamilyContext } from '../Context/FamilyContext'

const GrandSonC = () => {
  const GrandSonInfo = useContext(FamilyContext);
  return (
    <div className='gson'>
    <div>GrandSon</div>
    <div>{GrandSonInfo?.onlyForGrandChildren()}</div>
    <div>{GrandSonInfo?.familyName}</div>
    </div>
  )
}

export default GrandSonC