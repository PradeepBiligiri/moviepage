import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [Rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <TextField
        value={poster}
        id="standard-basic"
        label="Poster"
        variant="standard"
        onChange={(event) => {
          setPoster(event.target.value);
        }}
      />

      <TextField
        value={summary}
        id="standard-basic"
        label="Summary"
        variant="standard"
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      />

      <TextField
        value={Rating}
        id="standard-basic"
        label="Rating"
        variant="standard"
        onChange={(event) => {
          setRating(event.target.value);
        }}
      />
      <TextField
        value={trailer}
        id="standard-basic"
        label="Trailer"
        variant="standard"
        onChange={(event) => {
          setTrailer(event.target.value);
        }}
      />
      {/* Copy Movie list and add new Movie through button */}
      {/* <button
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: Rating,
              summary: summary,
            };

            setMovieList([...movieList, newMovie]);
          }}
        >
          Add Movie
        </button> */}
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: Rating,
            summary: summary,
            trailer: trailer,
          };

          // setMovieList([...movieList, updatedMovie]);

          //1. To UPDATE we use PUT method and respoective ID
          //2. The BODY will have the data which is converted to JSON
          //3. Headers is user for the JSON.

          fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json)
            .then(() => navigate("/movies"));
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
