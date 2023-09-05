import axios from "axios";

export const GetTrendingMovies = async (page) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=fefe318aafd71422efdb82676eaa4f84&page=${page}`
  );
  return response?.data?.results;
};
