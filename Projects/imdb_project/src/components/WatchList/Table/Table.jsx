import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = () => {
  return (
    <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
        <TableHeader />
        <TableBody />
      </table>
  )
}

export default Table