import React from 'react'
import Children from './Children'

const Parents = ({info}) => {
  return (
    <div className='parent'>
        <div>Parent</div>
        <div>{info?.familyName}</div>
        <div>{info?.onlyForChildren}</div>
        <Children info={info}/>
    </div>
  )
}

export default Parents