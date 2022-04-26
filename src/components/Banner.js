import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

import "../styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "0 -45px",
      }}
    >
      <div className="banner-contents">
        <div className="banner-title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner-buttons">
          <button className="banner-button">View Page</button>
          <button className="banner-button">Add to List</button>
        </div>
        <div className="banner-description">
          {truncate(movie?.overview, 300)}
        </div>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
