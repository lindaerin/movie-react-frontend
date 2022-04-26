import React from "react";

import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";

import requests from "../requests";
import MovieRow from "./MovieRow";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Nav />
      <MovieRow title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Footer />
    </div>
  );
}

export default Home;
