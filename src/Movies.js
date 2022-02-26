import { Counter } from "./Counter.js";
import { useState } from "react";

export function Movies({
  name,
  poster,
  rating,
  summary,
  // enable,
  // toggelVisibility,
}) {
  // const [enable, setEnable] = useState(false);
  // const toggelVisibility = () => setEnable(!enable);
  const [show, setShow] = useState(true);
  // Conditional styling
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const paraStyle = {
    display: show ? "Block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={poster} alt={name + " poster"} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <p style={styles} className="movie-rating">
          ⭐ {rating}
        </p>
      </div>
      <h4>{`The show value is : ${show}`}</h4>
      <button
        onClick={() => (setShow(!show) ? "Show summary" : "Hide summary")}
      >
        Show summary
      </button>
      {/* <button onClick={toggelVisibility}>
        {!enable ? "Show Summary" : "Hide Summary"}
      </button> */}
      <br />
      <p style={paraStyle} className="movie-summary">
        {show && summary}
      </p>
      {/* <div>{enable && <p className="movie-summary">{summary}</p>}</div> */}
      <br />
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}
