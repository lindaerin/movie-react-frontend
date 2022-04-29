import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../styles/MoviePage.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { MdBookmarkBorder, MdPlayCircleOutline } from "react-icons/md";
import Recommendation from "./Recommendation";
import Footer from "./Footer";

function MoviePage() {
  let params = useParams();
  let movieId = params.movieId;
  const movieUrl = requests.fetchMovie(movieId);
  const [movieData, setMovieData] = useState([]);

  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(movieUrl);
      setMovieData(request.data);
      return request;
    }

    fetchData();
  }, [movieUrl]);

  const result = [];
  result.push(movieData);

  console.log(result);

  return (
    <div>
      {result.map((movie, index) => (
        <>
          <header>
            <div
              className="banner movie-banner"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: "0 -80px",
                maxHeight: "450px",
              }}
            />
            <Container className="movie-info">
              <Row>
                <Col>
                  <img
                    key={movie.id}
                    className="movie-poster"
                    src={`${baseurl}${movie.poster_path}`}
                    alt={movie.name}
                  />
                </Col>
                <Col xs={8}>
                  <div className="movie-title">{movie.title}</div>
                  <div className="movie-detail">
                    <div className="movie-tagline">{movie.tagline}</div>
                    <div className="genre-list">
                      {movie.genres?.map((genre, id) => (
                        <div className="genre">{genre.name}</div>
                      ))}
                    </div>
                    <div>{movie.overview}</div>
                    <div className="button-group">
                      <Button
                        variant="warning"
                        className="play-button"
                        style={{ backgroundColor: "#f9c735" }}
                      >
                        <MdPlayCircleOutline
                          style={{
                            fontSize: 30,
                            paddingInline: 5,
                            paddingBottom: 2,
                          }}
                        />
                        Play Trailer
                      </Button>
                      <Button variant="secondary" className="grey-button">
                        <MdBookmarkBorder
                          style={{
                            fontSize: 30,
                            paddingInline: 5,
                            paddingBottom: 2,
                          }}
                        />
                        Add to Watchlist
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
          <Container className="recommend-content">
            <Recommendation movieId={movieId} name={movie.name} />
          </Container>
        </>
      ))}
      <Footer />
    </div>
  );
}

export default MoviePage;
