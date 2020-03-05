import React, { useEffect, useState } from "react";
import MovieItem from "./movie-item";

export default function Movie() {

  const [movies, setMovies] = useState()

  async function getMovies() {
    const response = await fetch('/api/v2/list_movies.json?limit=50')
    const result = await response.json() 

    setMovies(result)
  }

  // [] 안에 내용이 바뀔 때마다 실행된다. 비어있으므로, 한 번만 실행됨
  useEffect(() => {
    // movie 데이터를 가져온다.
    getMovies()
  }, [])


  return (
    <>
      <p className="moviesTitle">Movie List</p>
      {movies ? movies.data.movies.map((movie, index) => (
        <MovieItem key={index} title={movie.title} />
      )) : "로딩 중"}
    </>
  );
}
