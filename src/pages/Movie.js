import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  const genreList = movie.genres
  const renderGenres = genreList.map(genre => 
    <li key={genre}>{genre}</li>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Title: {movie.title}</h1>
        <h2>Length: {movie.time}</h2>
        <h2>Genres: </h2>
        <ul>
          {renderGenres}
        </ul>
      </main>
    </>
  );
};

export default Movie;
