import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddMovies({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [Rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  return (
    <div className="add-movie-form">
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="Poster"
        variant="standard"
        onChange={(event) => {
          setPoster(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="Summary"
        variant="standard"
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      />

      <TextField
        id="standard-basic"
        label="Rating"
        variant="standard"
        onChange={(event) => {
          setRating(event.target.value);
        }}
      />
      <TextField
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
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: Rating,
            summary: summary,
            trailer: trailer,
          };

          setMovieList([...movieList, newMovie]);
          navigate("/movies");
        }}
      >
        Add Movie
      </Button>
    </div>
  );
}
