import React from 'react'

const GenreFilter = ({ genreList, selectedGenre, setSelectedGenre }) => {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
      className="p-2 border rounded border-gray-700 bg-gray-800 opacity-60 backdrop-blur-md text-white"
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  )
}

export default GenreFilter
