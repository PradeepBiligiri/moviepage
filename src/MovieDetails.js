import { useNavigate, useParams } from "react-router-dom";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function MovieDetails({ movieList }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movieList[id];
  console.log(movieList, movie);
  return (
    <div>
      <iframe
        width="85%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>

          <p className="movie-rating">
            <StarRateRoundedIcon style={{ color: "goldenrod" }} />
            {movie.rating}
          </p>
        </div>

        <p className="movie-summary">{movie.summary}</p>

        <Button
          variant="contained"
          className="button"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIosIcon fontSize="small" />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
