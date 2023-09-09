import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { genreids } from "../Mock/watchListData";

const Table = ({ favourites = [] }) => {
  const [genre, setGenre] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  useEffect(() => {
    const temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    setGenre(["All Genre", ...temp]);
  },[favourites]);

  let filteredMovies = [];
  filteredMovies = currGenre === "All Genre" ? favourites : favourites.filter((movie) => 
  genreids[movie.genre_ids[0]] == currGenre);

  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genre &&
          genre.length > 0 &&
          genre.map((eachGenre) => {
            return <div  className={
              currGenre == eachGenre
                ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
            }
            onClick={() => {setCurrGenre(eachGenre)}}>{eachGenre}</div>;
          })}
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <TableHeader />
        <TableBody movies={filteredMovies} />
      </table>
    </>
  );
};

export default Table;
