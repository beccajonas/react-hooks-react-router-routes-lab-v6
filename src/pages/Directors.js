import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ReusableCard";


function Directors() {
  const [ directors, setDirectors ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(res => res.json())
    .then(data => setDirectors(data))
  }, [])

  console.log(directors);

  const renderDirectors = directors.map(director => 
  <Card key={director.id} name={director.name} movies={director.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {renderDirectors}
      </main>
    </>
  );
};

export default Directors;
