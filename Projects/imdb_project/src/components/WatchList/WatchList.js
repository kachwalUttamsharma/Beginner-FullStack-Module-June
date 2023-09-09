import React, { useEffect, useState } from 'react'
import Table from './Table/Table'

const WatchList = () => {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    let moviesFetchedFromLocalStorage = localStorage.getItem('imdbWatchList')
    moviesFetchedFromLocalStorage = JSON.parse(moviesFetchedFromLocalStorage)
    setFavourites(moviesFetchedFromLocalStorage);
  }, [])
  
  return (
    <div className='rounded-lg border border-gray-200 shadow-md m-5'>
      <Table favourites={favourites} setFavourites={setFavourites}/>
    </div>
  )
}

export default WatchList