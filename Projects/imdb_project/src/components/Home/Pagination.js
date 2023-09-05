import React from 'react'

const Pagination = ({onPrev, onNext, counter}) => {
  return (
    <div className='flex justify-center items-center gap-4'>
        <button onClick={onPrev} className='gap-2 rounded-fill border-4 rounded-lg border-blue-800 m-4 p-2'>Previous</button>
        <div className='gap-2 rounded-fill'>{counter}</div>
        <button onClick={onNext} className='gap-2 rounded-fill border-4 rounded-lg border-blue-800 m-4 p-2'>Next</button>
    </div>
  )
}

export default Pagination