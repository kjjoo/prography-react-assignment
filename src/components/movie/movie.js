import React, { useEffect, useState } from "react";
import MovieItem from "./movie-item";
import styled from "styled-components";
import Page from "react-page-loading";

const MovieTitle = styled.p`
  font-size: 30px;
  color: #e70031;
  text-align: center;
`;

// Movie 메뉴
export default function Movie() {
// 새로운 변수를 선언하고, movies라고 부름
  const [movies, setMovies] = useState()
// 영화 데이터 불러와서, Json 형식으로 저장
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
      <MovieTitle>Movie List</MovieTitle>
      {movies ? movies.data.movies.map((movie, index) => (
        <MovieItem key={index} title={movie.title} />
      )) : <Page loader={"bar"} color={"#A9A9A9"} size={4}/>}
    </>
  );
}
