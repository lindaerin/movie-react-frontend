import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../styles/MoviePage.css";

function MoviePage() {
  let params = useParams();
  let movieId = params.movieId;
  const movieUrl = requests.fetchMovie(movieId);
  const movieKeys = ["poster_path", "title", "overview"];
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(movieUrl);
      setMovieData(request.data);
      return request;
    }

    fetchData();
  }, [movieUrl]);

  return (
    <div className="page-content">
      <div>
        {/* {movieData.map((movie) => (
          <div>{movie.poster_path}</div>
        ))} */}
      </div>
    </div>
  );
}

export default MoviePage;
