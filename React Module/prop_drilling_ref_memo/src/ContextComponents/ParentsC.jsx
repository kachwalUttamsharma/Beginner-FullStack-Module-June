import React, { useContext } from 'react'
import ChildrenC from './ChildrenC'
import { FamilyContext } from '../Context/FamilyContext'

const ParentsC = () => {
  
  const ParentInfo = useContext(FamilyContext);
  return (
    <div className='parent'>
        <div>Parent</div>
        <div>{ParentInfo?.familyName}</div>
        <div>{ParentInfo?.onlyForChildren}</div>
        <ChildrenC/>
    </div>
  )
}

export default ParentsC