import React from 'react'

const SearchMovie = ({searchStr, setSearchStr}) => {
  return (
    <div className="text-center">
    <input
      type="text"
      className="border bg-gray-200 border-4 text-center p-1 m-2"
      placeholder="search for the Movie"
      value={searchStr}
      onChange={(e) => setSearchStr(e.target.value)}
    />
  </div>
  )
}

export default SearchMovie