import { Counter } from "./Counter.js";

export function Movies({ name, poster, rating, summary }) {
  // Conditional styling
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  return (
    <div className="movie-container">
      <h1>Movie Buzz</h1>
      <img src={poster} alt={name + " poster"} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <p style={styles} className="movie-rating">
          ⭐ {rating}
        </p>
      </div>
      <p className="movie-summary">{summary}</p>
      <br />
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}
