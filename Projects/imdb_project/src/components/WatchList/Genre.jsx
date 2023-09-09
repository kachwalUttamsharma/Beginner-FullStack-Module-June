import React from 'react'

const Genre = ({genre, currGenre, setCurrGenre}) => {
  return (
    <div className="mt-6 flex space-x-2 justify-center">
    {genre &&
      genre.length > 0 &&
      genre.map((eachGenre , index) => {
        return (
          <div key={index}
            className={
                currGenre == eachGenre
                ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
            }
            onClick={() => {
              setCurrGenre(eachGenre);
            }}
          >
            {eachGenre}
          </div>
        );
      })}
  </div>
  )
}

export default Genre