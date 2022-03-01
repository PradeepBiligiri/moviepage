import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";


import "./App.css";
// import { AddColor } from "./ColorBox";
import { Movies } from "./Movies";
import { NavLink, Route, Routes } from "react-router-dom";
import { AddColor } from "./ColorBox";
import { MovieDetails } from "./MovieDetails";
// import { useState } from "react";
const initial_moive_list = [
  {
    name: "Garuda Gamana Vrushabha Vahana",
    poster:
      "https://lyricsraag.com/wp-content/uploads/2021/12/Chandrachooda-Garuda-Gamana-Vrishabha-Vahana-lyrics.jpg",
    rating: 8.6,
    summary:
      "Set in the backdrop of the coastal and cultural city of modern-day Mangaluru, Hari and his soulmate Shiva rise together to great heights only to face off as bitter enemies resulting to their own downfall and destruction.",
    trailer: "https://www.youtube.com/embed/BnuDHJcSd0Q",
  },
  {
    name: "Ulidavaru Kandanthe",
    poster:
      "https://i.pinimg.com/originals/aa/1f/92/aa1f92bfa7a05deaa3302591fa148216.jpg",
    rating: 8.4,
    summary:
      "A journalist sets out to uncover the truth behind an incident, through the perspectives of different people, unraveling how they and their lives are intertwined with it.",
    trailer: "https://www.youtube.com/embed/POJ_6EtGeMw",
  },
  {
    name: "Mahaan",
    poster: "https://pbs.twimg.com/media/E9PolQEVoAEOjzn.jpg",
    rating: 8.1,
    summary:
      "Gandhi Mahaan, a school teacher, is abandoned by his family after he decides to live a life of his own, with personal freedom.",
    trailer: "https://www.youtube.com/embed/i4ORfM-q35Y",
  },
  {
    name: "Minnal Murali",
    poster:
      "https://www.nowrunning.com/content/movie/2018/minna-23659/Stills/minnal_2021320.jpg",
    rating: 8.1,
    summary:
      "An unusual event creates a lightning which in turns gives superhuman abilies to an ambitious tailor ,whose responsibility is now to protect his home village from the evil plans of the antagonist.",
    trailer: "https://www.youtube.com/embed/zAUAliz1TKA",
  },
  {
    name: "Spider-Man: No Way Home",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b8320c110356853.6066eec3b3637.jpg",
    rating: 8.7,
    summary:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
  },
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/a_1i3XCB7WY",
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU",
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0",
  },
  {
    name: "The Lone Ranger",
    poster:
      "https://i.pinimg.com/originals/12/b6/a8/12b6a844a00ce1bd8857bc44dffce43e.jpg",
    summary:
      "In 1933 a boy discovers an ancient Native American in a sideshow carnival tent. The Indian is Tonto (Johnny Depp), the old companion of John Reid (Armie Hammer), a lawman more famously known as the Lone Ranger. With this opportunity to set the record straight about his and Reid's adventures, Tonto recalls the day in 1869 when he first encountered the man who would be his trusted friend and tells of their teamwork bringing down Butch Cavendish (William Fichtner) and other Old West outlaws.",
    rating: 6.4,
    trailer: "https://www.youtube.com/embed/JjFsNSoDZK8",
  },
  {
    name: "End Game",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
  },
  {
    name: "Vishwaroopam",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWIxNDdhNzEtMjE5YS00ZWM0LTk3YjUtNzBlZDQzMjk3NGRlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    rating: 8.1,
    summary:
      "When a classical dancer's suspecting wife sets an investigator behind him, a series of violent events are triggered, revealing his real identity and connection to a darker world.",
    trailer: "https://www.youtube.com/embed/T2F6euNVT5Y",
  },
  {
    name: "K.G.F Chapter 1",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjY1MmM2N2ItYjc1NS00Yjc1LTkxYmQtNGJiMjYwMTlmNDE5XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    rating: 8.3,
    summary:
      "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
    trailer: "https://www.youtube.com/embed/qXgF-iJ_ezE",
  },
  {
    name: "Virumandi",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzUxYWUwMzktOWZmMS00NTU1LTg1ODgtYTYxMmRjNGZkYjkyXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg",
    rating: 8.4,
    summary:
      "A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village.",
    trailer: "https://www.youtube.com/embed/RVN_g9XYUsY",
  },
];

//Home --> welcome to Move App
//movie-list -->add movie from + movie list
// color game --> add Color components
export default function App() {
  //Lifting the state up -- lifteed from child to parent
  const [movieList, setMovieList] = useState(initial_moive_list);
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/color-game">Color Game</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movies/:id"
          element={
            <MovieDetails movieList={movieList} setMovieList={setMovieList} />
          }
        />
      </Routes>
    </div>
  );
}

function MovieList({ movieList, setMovieList }) {
  // const [enable, setEnable] = useState(false);
  // const toggelVisibility = () => setEnable(!enable);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [Rating, setRating] = useState("");

  return (
    <div className="App">
      <h1>Movies</h1>
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
            };

            setMovieList([...movieList, newMovie]);
          }}
        >
          Add Movie
        </Button>
      </div>
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
            // movieList={movieList}

            // enable={enable}
            // toggelVisibility={toggelVisibility}
          />
        ))}
        {/* <AddMovies /> */}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1> Welcome to Home😊😍</h1>
    </div>
  );
}
// function AddMovies({ addMovie }) {
//   const movieList = [
//     {
//       name: { addMovie },
//       poster: { addMovie },
//       rating: { addMovie },
//       summary: { addMovie },
//     },
//   ];
// }
