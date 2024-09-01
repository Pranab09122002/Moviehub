import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/layout/Ui/Card";

const Movie = () => {
  const movie = useLoaderData();

  return (
    <>
      <ul className="grid md:grid-cols-2 ">
        {movie.Search.map((currMovie) => {
          return <Card key={currMovie.imdbID} currMovie={currMovie} />;
        })}
        {/* {movie.map((currMovie) => {
          return <Card key={currMovie.id} currMovie={currMovie} />;
        })} */}
      </ul>
    </>
  );
};

export default Movie;
