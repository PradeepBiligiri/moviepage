import { Movies } from "./Movies";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { AddMovies } from "./AddMovie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieList() {
  // const [enable, setEnable] = useState(false);
  // const toggelVisibility = () => setEnable(!enable);
  const [movieList, setMovieList] = useState([]);
  const getMovie = () => {
    fetch(`${API}/movies`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data);
        console.log(data);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Movies</h1>

      <br />
      <div className="movie-list">
        {movieList.map((ml, index) => (
          <Movies
            Key={ml.id}
            name={ml.name}
            poster={ml.poster}
            rating={ml.rating}
            summary={ml.summary}
            id={ml.id}
            trailer={ml.trailer}
            deleteButton={
              <IconButton
                aria-label="Delete-movie"
                onClick={() => {
                  fetch(`${API}/movies/${ml.id}`, { method: "DELETE" }).then(
                    () => getMovie()
                  );
                }}
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
            editButton={
              <IconButton
                aria-label="Edit-movie"
                onClick={() => {
                  console.log("Edit movie...", index);
                  navigate("/movies/add");
                }}
              >
                <EditIcon color="primary" />
              </IconButton>
            }
          />
        ))}
        {/* <AddMovies /> */}
      </div>
    </div>
  );
}
// deleteButton={
//   <button
//     onClick={() => {
//       let copyMovieList = [...movieList];
//       let removedMovie = copyMovieList.splice(index, 1);
//       console.log(removedMovie, "index", index);
//       setMovieList(copyMovieList);
//     }}
//   >
//     Delete
//   </button>
// }
