import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const editValidationSchema = yup.object({
  name: yup.string().required("tell us the movie name"),
  poster: yup
    .string()
    .min(4, "need longer charecters")
    .required("poster is required"),
  rating: yup
    .number()
    .typeError("This doesn't look like a rating")
    .min(0, "Need a higher rating")
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

export function EditMovieForm({ movie }) {
  // const [name, setName] = useState(movie.name);
  // const [poster, setPoster] = useState(movie.poster);
  // const [summary, setSummary] = useState(movie.summary);
  // const [Rating, setRating] = useState(movie.rating);
  // const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();
  const edit = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },
    validationSchema: editValidationSchema,
    onSubmit: (editMovie) => {
      console.log("onSubmit", editMovie);
      EditMovie(editMovie);
    },
  });
  const EditMovie = (editMovie) => {
    // setMovieList([...movieList, updatedMovie]);
    //1. To UPDATE we use PUT method and respoective ID
    //2. The BODY will have the data which is converted to JSON
    //3. Headers is user for the JSON.

    console.log("EditMovie", editMovie);
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(editMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json)
      .then(() => navigate("/movies"));
  };

  return (
    <form className="add-movie-form" onSubmit={edit.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        value={edit.values.name}
        onChange={edit.handleChange}
        onBlur={edit.handleBlur}
        // onChange={(event) => {
        //   setName(event.target.value);
        // }}
      />
      <br />
      {edit.touched.name && edit.errors.name ? edit.errors.name : ""}
      <br />

      <TextField
        id="poster"
        name="Poster"
        label="Name"
        variant="standard"
        value={edit.values.poster}
        onChange={edit.handleChange}
        onBlur={edit.handleBlur}
      />

      <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="standard"
        value={edit.values.summary}
        onChange={edit.handleChange}
        onBlur={edit.handleBlur}
      />

      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="standard"
        value={edit.values.rating}
        onChange={edit.handleChange}
        onBlur={edit.handleBlur}
      />
      <TextField
        id="trailer"
        name="trailer"
        label="Trailer"
        variant="standard"
        value={edit.values.trailer}
        onChange={edit.handleChange}
        onBlur={edit.handleBlur}
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
      <Button variant="contained" color="success" type="submit">
        SAVE
      </Button>
    </form>
  );
}
