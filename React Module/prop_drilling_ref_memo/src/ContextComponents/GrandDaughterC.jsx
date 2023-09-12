import React, { useContext } from 'react'
import { FamilyContext } from '../Context/FamilyContext'

const GrandDaughterC = () => {
  const GrandDaughterInfo = useContext(FamilyContext);
  return (
    <div className='gdaughter'>
    <div>GrandDaughter</div>
    <div>{GrandDaughterInfo?.onlyForGrandChildren()}</div>
    <div>{GrandDaughterInfo?.familyName}</div>
    </div>
  )
}

export default GrandDaughterC