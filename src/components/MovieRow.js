import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "../axios";
import "../styles/MovieRow.css";

import {Container, Row} from "react-bootstrap";

const baseurl = "https://image.tmdb.org/t/p/original";

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <Container className="mt-n1">
      <Row>
      <div className="row-title">
        <h2>{title}</h2>
      </div>

      <div className="row-posters">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              key={movie.id}
              className="row-poster"
              src={`${baseurl}${movie.poster_path}`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
      <Outlet />
      </Row>
    </Container>
   
  );
}

export default MovieRow;
