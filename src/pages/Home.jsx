import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search,setSearch] = useState("")

  useEffect(() => {

   let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=c71f3390a6c08b3076c84720d6ab064e`;

   if (search){
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=c71f3390a6c08b3076c84720d6ab064e`
   }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page,search]);

  return (
    <div className="p-4 pt-16">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Movies..."
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
        onChange={(e)=> setSearch(e.target.value)}/>

      {/* Movie List */}
      <div className="movie-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container mt-6 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded ml-2"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
