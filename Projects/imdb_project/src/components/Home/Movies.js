import React, { useEffect, useState } from "react";
import { GetTrendingMovies } from "../../service/GetTrendingMovies";
const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const result = await GetTrendingMovies();
    setMovies(result);
    console.log(result);
  }, []);

  return (
    <div>
      <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[180px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div className="text-white text-center font-bold w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
