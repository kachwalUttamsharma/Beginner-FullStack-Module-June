import React from 'react'
import Parents from './Parents'

const Family = ({info}) => {
    console.log(info.familyName);
  return (
    <div className='family'>
        <div>Family</div>
        <div>{info?.familyName}</div>
        <Parents info={info}/>
    </div>
  )
}

export default Family