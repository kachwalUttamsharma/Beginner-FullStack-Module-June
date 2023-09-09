import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import { genreids } from "./Mock/watchListData";
import Genre from "./Genre";
import SearchMovie from "./SearchMovie";
import { filterOnSearchstr, filterOnGenre, sortOnRatings, sortOnPopularity } from "./helper";

const WatchList = () => {
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [searchStr, setSearchStr] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [genre, setGenre] = useState([]);
  const [sortRatings, setSortRating] = useState("");
  const [sortPopularity, setSortPopularity] = useState("");

  useEffect(() => {
    let moviesFetchedFromLocalStorage = localStorage.getItem("imdbWatchList");
    moviesFetchedFromLocalStorage = JSON.parse(moviesFetchedFromLocalStorage);
    setFavourites(moviesFetchedFromLocalStorage);
  }, []);

  useEffect(() => {
    setGenre([
      "All Genre",
      ...new Set(
        favourites.map(
          (movie) => genreids[movie.genre_ids[0]]
        )
      ),
    ])
  }, [favourites])

  let filteredData = [];
  if (favourites && favourites.length > 0) {
    filteredData = filterOnGenre(favourites, currGenre);
    filteredData = filterOnSearchstr(filteredData, searchStr);
    filteredData = sortOnRatings(filteredData, sortRatings);
    filteredData = sortOnPopularity(filteredData, sortPopularity);
  }

  const DeleteMovie = (movie) => {
    const newArr = favourites.filter((m) => m.id !== movie.id);
    setFavourites(newArr);
    localStorage.setItem("imdbWatchList", JSON.stringify(newArr));
  };
  return (
    <div className="rounded-lg border border-gray-200 shadow-md m-5">
      <Genre genre={genre} currGenre={currGenre} setCurrGenre={setCurrGenre} />
      <SearchMovie searchStr={searchStr} setSearchStr={setSearchStr} />
      <Table
        favourites={filteredData}
        setFavourites={setFavourites}
        DeleteMovie={DeleteMovie}
        setSortRating={setSortRating}
        setSortPopularity={setSortPopularity}
      />
    </div>
  );
};

export default WatchList;
