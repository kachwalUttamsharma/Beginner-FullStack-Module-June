import React from 'react'
import GrandDaughter from './GrandDaughter'
import GrandSon from './GrandSon'

const Children = ({info}) => {
  return (
    <div className='children'>
        <div>Children</div>
        <div>{info?.familyName}</div>
        <div>{info?.onlyForChildren()}</div>
        <GrandDaughter info={info} />
        <GrandSon info={info}/>
    </div>
  )
}

export default Children