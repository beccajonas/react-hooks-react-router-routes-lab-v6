import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ReusableCard";

function Actors() {
  const [ actors , setActors ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(data => setActors(data))
  }, [])

  const renderActors = actors.map(actor => 
    <Card key={actor.id} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {renderActors}
      </main>
    </>
  );
};

export default Actors;
