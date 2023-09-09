import React from "react";
import { genreids } from "../Mock/watchListData";
// import { watchList } from "../Mock/watchListData";

const TableBody = ({ movies = [], DeleteMovie }) => {
  return (
    <tbody className="divide-y divide-gray-500 border-t border-gray-100">
      {movies &&
        movies.length > 0 &&
        movies.map((movie, index) => {
          return (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                <img
                  className="h-[10rem] w-[10rem] object-fit"
                  src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                />
                <div className="font-medium text-gray-700 text-sm">
                  {movie.title}
                </div>
              </td>
              <td className="p-2">{movie.vote_average}</td>
              <td className="p-2">{movie.popularity}</td>
              <td className="p-2">{movie.release_date}</td>
              <td className="p-2">{genreids[movie.genre_ids[0]]}</td>
              <td>
                <button
                  className="text-red-600 border border-2 p-2"
                  onClick={() => DeleteMovie(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;
