import { Movies } from "./Movies";

export function MovieList({ movieList, setMovieList }) {
  // const [enable, setEnable] = useState(false);
  // const toggelVisibility = () => setEnable(!enable);

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
          />
        ))}
        {/* <AddMovies /> */}
      </div>
    </div>
  );
}
