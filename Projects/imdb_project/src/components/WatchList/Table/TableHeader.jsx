import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className='p-2 m-4'>Name</th>
        <th className='p-2 m-4'>Rating</th>
        <th className='p-2 m-4'>Popularity</th>
        <th className='p-2 m-4'>Release Date</th>
      </tr>
    </thead>
  )
}

export default TableHeader