import React, { useContext } from 'react'
import GrandDaughterC from './GrandDaughterC'
import GrandSonC from './GrandSonC'
import { FamilyContext } from '../Context/FamilyContext'

const ChildrenC = () => {
  const ChildrenInfo = useContext(FamilyContext);
  return (
    <div className='children'>
        <div>Children</div>
        <div>{ChildrenInfo?.familyName}</div>
        <div>{ChildrenInfo?.onlyForChildren()}</div>
        <GrandDaughterC/>
        <GrandSonC/>
    </div>
  )
}

export default ChildrenC