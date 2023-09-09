import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ favourites = [], DeleteMovie,setSortRating,  setSortPopularity}) => {
  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <TableHeader
        setSortRating={setSortRating}
        setSortPopularity={setSortPopularity}
      />
      <TableBody movies={favourites} DeleteMovie={DeleteMovie} />
    </table>
  );
};

export default Table;
