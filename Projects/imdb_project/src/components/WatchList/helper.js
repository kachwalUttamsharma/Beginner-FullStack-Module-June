import { genreids } from "./Mock/watchListData";

// applying genre filter
export const filterOnGenre = (favourites,currGenre) => {
  if(currGenre == "All Genre") {
    return favourites;
  } else {
    return favourites.filter((movie) => genreids[movie.genre_ids[0]] === currGenre);
  }
}

// applying search filter
export const filterOnSearchstr = (favourites, searchStr) => {
  if(searchStr == "") {
    return favourites;
  } else {
    return favourites.filter((movie) => {
      return movie.title.toLowerCase().includes(searchStr.toLowerCase());
    }) 
  } 
}

// applying sorting logic for rating
export const sortOnRatings = (favourites, sortRatings) => {
  if(sortRatings.length > 0 && sortRatings !== "") {
  if(sortRatings === "ascending") {
    return favourites.sort((m1, m2) => {
      return m1.vote_average - m2.vote_average
    })
  } else {
    return favourites.sort((m1, m2) => {
      return m2.vote_average - m1.vote_average
    })
  }
} else {
  return favourites;
}
}

// applying sorting logic for popularity
export const sortOnPopularity = (favourites, sortPopularity) => {
  if(sortOnPopularity.length > 0 && sortPopularity !== "") {
    if(sortPopularity === "ascending") {
      return favourites.sort((m1, m2) => {
        return m1.popularity - m2.popularity
      })
    } else {
      return favourites.sort((m1, m2) => {
        return m2.popularity - m1.popularity
      })
    }
  } else {
    return favourites;
  }
}
