import { Movies } from "./Movies";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { AddMovies } from "./AddMovie";
import { useNavigate } from "react-router-dom";

export function MovieList({ movieList, setMovieList }) {
  // const [enable, setEnable] = useState(false);
  // const toggelVisibility = () => setEnable(!enable);
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Movies</h1>

      <br />
      <div className="movie-list">
        {movieList.map((ml, index) => (
          <Movies
            name={ml.name}
            poster={ml.poster}
            rating={ml.rating}
            summary={ml.summary}
            id={index}
            trailer={ml.trailer}
            deleteButton={
              <IconButton
                aria-label="Delete-movie"
                onClick={() => {
                  let copyMovieList = [...movieList];
                  let removedMovie = copyMovieList.splice(index, 1);
                  setMovieList(copyMovieList);
                  console.log(removedMovie, "index", index);
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
