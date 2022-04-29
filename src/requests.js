const API_KEY = "5fd0b6a80386141619a4bd3e6c1a2f85";

const requests = {
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchDiscover: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchMovie: (movieId) =>
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  fetchVideo: (movieId) =>
    `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  fetchRecommendation: (movieId) =>
    `/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US`,
};

export default requests;
