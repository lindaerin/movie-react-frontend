import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// local storage using context api

// inital state
const initalState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

// create context
export const GlobalContext = createContext(initalState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, addMovieToWatchlist }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
