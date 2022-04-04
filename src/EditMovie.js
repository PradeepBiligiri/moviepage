import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditMovieForm } from "./EditMovieForm";
import { API } from "./global";

export function EditMovie() {
  const { id } = useParams();
  // const movie = movieList[id];

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => {
        setMovie(mv);
        console.log(mv);
      });
  }, []);

  return movie ? <EditMovieForm movie={movie} /> : "Loading...";
}
