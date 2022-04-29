import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import requests from "../requests";
import "../styles/Recommendation.css";

function Recommendation({ movieId, movieName }) {
  const recommendationUrl = requests.fetchRecommendation(movieId);
  const [recommendations, setRecommendation] = useState([]);

  console.log("Movieid" + movieId);
  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(recommendationUrl);
      setRecommendation(request.data.results);
      console.log("Request: " + request);
      return request;
    }

    fetchData();
  }, [recommendationUrl]);

  console.log(recommendations);

  const array = recommendations.slice(0, 5);

  return (
    <div>
      <div className="recommend-header">You may also like...</div>
      <div className="posters">
        {array.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <img
              key={movie.id}
              className="poster"
              src={`${baseurl}${movie.poster_path}`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
