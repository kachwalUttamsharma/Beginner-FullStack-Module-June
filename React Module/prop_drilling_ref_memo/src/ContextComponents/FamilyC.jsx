import React from 'react'
import ParentsC from './ParentsC'

const FamilyC = ({info}) => {
    console.log(info.familyName);
  return (
    <div className='family'>
        <div>Family</div>
        <div>{info?.familyName}</div>
        <ParentsC/>
    </div>
  )
}

export default FamilyC