import { genreids } from "../Mock/watchListData";

export const filterArrOnMovies = (favourites, currGenre,searchStr,sortRatings,sortPopularity) => {
  let filteredMovies = [];
    // applying genre filter
  filteredMovies =
  currGenre === "All Genre"
    ? favourites
    : favourites.filter((movie) => genreids[movie.genre_ids[0]] == currGenre);

// applying search filter
filteredMovies = favourites.filter((movie) => {
  return movie.title.toLowerCase().includes(searchStr.toLowerCase());
})    

// applying sorting logic for rating
filteredMovies = sortRatings === "ascending" ? favourites.sort((m1, m2) => {
  return m1.vote_average - m2.vote_average
}) : favourites.sort((m1, m2) => {
  return m2.vote_average - m1.vote_average
})

//  // applying sorting logic for popularity
//  filteredMovies = sortPopularity === "ascending" ? favourites.sort((m1, m2) => {
//   return m1.popularity - m2.popularity
// }) : favourites.sort((m1, m2) => {
//   return m2.popularity - m1.popularity
// })

return filteredMovies
}