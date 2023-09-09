import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { genreids } from "../Mock/watchListData";
import { filterArrOnMovies } from "./helper";

const Table = ({ favourites = [], setFavourites }) => {
  const [genre, setGenre] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [searchStr, setSearchStr ] = useState("");
  const [sortRatings, setSortRating] =useState('');
  const [sortPopularity, setSortPopularity] = useState('');
  useEffect(() => {
    const temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    setGenre(["All Genre", ...temp]);
  }, [favourites]);

  const DeleteMovie = (movie) => {
    const newArr = favourites.filter((m) => m.id != movie.id);
    setFavourites(newArr);
    localStorage.setItem('imdbWatchList', JSON.stringify(newArr));
  }
  const filteredMovies = filterArrOnMovies(favourites, currGenre,searchStr,sortRatings,sortPopularity);
  
  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genre &&
          genre.length > 0 &&
          genre.map((eachGenre) => {
            return (
              <div
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
      <div className="text-center">
        <input
          type="text"
          className="border bg-gray-200 border-4 text-center p-1 m-2"
          placeholder="search for the Movie"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <TableHeader setSortRating={setSortRating} setSortPopularity={setSortPopularity}/>
        <TableBody movies={filteredMovies} DeleteMovie={DeleteMovie}/>
      </table>
    </>
  );
};

export default Table;
