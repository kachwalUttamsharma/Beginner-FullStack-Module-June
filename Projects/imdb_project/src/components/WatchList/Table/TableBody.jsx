import React from "react";
import { watchList } from "../Mock/watchListData";

const TableBody = () => {
  return (
    <tbody className="divide-y divide-gray-500 border-t border-gray-100">
      {watchList.length > 0 &&
        watchList.map((movie) => {
          return (
            <tr className="hover:bg-gray-50">
              <td className="flex items-center px-6 py-4 font-normal text-gray-900 space-x-2">
                <img
                  className="h-[10rem] w-[10rem] object-fit"
                  src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                />
                <div className="font-medium text-gray-700 text-sm">
                  {movie.title}
                </div>
              </td>
              <td className="py-4">{movie.vote_average}</td>
              <td className="py-4">{movie.popularity}</td>
              <td className="py-4">{movie.release_date}</td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;
