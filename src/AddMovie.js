import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("Tell us the movie name"),
  poster: yup
    .string()
    .min(4, "need longer charecters")
    .required("poster is required"),
  rating: yup
    .number()
    .typeError(
      "This doesn't look like a rating, rating must me in number from 1-10"
    )
    .min(1, "Need a higher rating")
    .max(10, "Too much rating")
    .required("Raating is required"),
  summary: yup
    .string()
    .min(20, "need longer charecters")
    .required("Summary is required"),
  trailer: yup
    .string()
    .min(4, "need longer charecters")
    .required("trailer is required"),
});
export function AddMovies() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [Rating, setRating] = useState("");
  // const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  const addMovie = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (NewMovie) => {
      // console.log("onSubmit", NewMovie);
      createMovie(NewMovie);
    },
  });
  const createMovie = (NewMovie) => {
    // const newMovie = {
    //   // name: name,
    //   // poster: poster,
    //   // rating: rating,
    //   // summary: summary,
    //   // trailer: trailer,
    // };

    // setMovieList([...movieList, newMovie]);

    //1. To CREATE we use POST method
    //2. The BODY will have the data which is converted to JSON
    //3. Headers is user for the JSON.
    console.log("createMovie", NewMovie);

    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(NewMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json)
      .then(() => navigate("/movies"));
  };

  return (
    <form onSubmit={addMovie.handleSubmit} className="add-movie-form">
      <TextField
        id="name"
        name="name"
        value={addMovie.values.name}
        onChange={addMovie.handleChange}
        onBlur={addMovie.handleBlur}
        label="Name"
        variant="standard"
        error={addMovie.touched.name && addMovie.errors.name}
        helperText={
          addMovie.touched.name && addMovie.errors.name
            ? addMovie.errors.name
            : ""
        }
        // onChange={(event) => {
        //   setName(event.target.value);
      />

      <TextField
        id="poster"
        name="poster"
        value={addMovie.values.poster}
        onChange={addMovie.handleChange}
        onBlur={addMovie.handleBlur}
        label="Poster"
        variant="standard"
        error={addMovie.touched.poster && addMovie.errors.poster}
        helperText={
          addMovie.touched.poster && addMovie.errors.poster
            ? addMovie.errors.poster
            : ""
        }
        // onChange={(event) => {
        //   setPoster(event.target.value);
        // }}
      />

      <TextField
        id="summary"
        name="summary"
        value={addMovie.values.summary}
        onChange={addMovie.handleChange}
        onBlur={addMovie.handleBlur}
        label="Summary"
        variant="standard"
        error={addMovie.touched.summary && addMovie.errors.summary}
        helperText={
          addMovie.touched.summary && addMovie.errors.summary
            ? addMovie.errors.summary
            : ""
        }
        // onChange={(event) => {
        //   setSummary(event.target.value);
        // }}
      />

      <TextField
        id="rating"
        name="rating"
        value={addMovie.values.rating}
        onChange={addMovie.handleChange}
        onBlur={addMovie.handleBlur}
        label="Rating"
        variant="standard"
        error={addMovie.touched.rating && addMovie.errors.rating}
        helperText={
          addMovie.touched.rating && addMovie.errors.rating
            ? addMovie.errors.rating
            : ""
        }
        // onChange={(event) => {
        //   setRating(event.target.value);
        // }}
      />

      <TextField
        id="trailer"
        name="trailer"
        value={addMovie.values.trailer}
        onChange={addMovie.handleChange}
        onBlur={addMovie.handleBlur}
        label="Trailer"
        variant="standard"
        error={addMovie.touched.trailer && addMovie.errors.trailer}
        helperText={
          addMovie.touched.trailer && addMovie.errors.trailer
            ? addMovie.errors.trailer
            : ""
        }
        // onChange={(event) => {
        //   setTrailer(event.target.value);
        // }}
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
      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}
