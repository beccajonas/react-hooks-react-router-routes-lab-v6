import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])

  const movieList = movies.map(movie => 
    <MovieCard key={movie.id} movie={movie} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
