import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../styles/MoviePage.css";

import {Container, Row, Col} from "react-bootstrap";
import { MdTrendingUp, MdStarBorder } from "react-icons/md";


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
    <div className="page-content">
      <div>
        {
          result.map((data, index) => (
            <Container key={index}>
              <Row>
                <Col xs={8}>
                  <div className="movie-title">{data.title}</div>
                  <div className="movie-detail">{data.tagline}</div>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <div className="movie-header">Popularity</div>
                      <div className="movie-detail"><MdTrendingUp /> {data.popularity}</div>
                    </Col>
                    <Col>
                      <div className="movie-header">Your Rating</div>
                      <div className="movie-detail"><MdStarBorder /> Not Rated</div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <div className="movie-content">
                  <Col>
                      <img
                        className="movie-poster"
                        key={data.id}
                        src={`${baseurl}${data.poster_path}`}
                        alt={data.name}
                      />
                  </Col>
                  <Col>
                    
                  </Col>
                </div>
              </Row>

            </Container>
          ))
        }
      </div>
    </div>
  );
}

export default MoviePage;
