import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AboutPage() {
  const [pokemon, setPokemon] = useState({});

  const params = useParams();
  console.log("params", params);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
      );
      console.log("one pokemon", response);
      setPokemon(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      {!pokemon ? (
        "Loading"
      ) : (
        <div>
          <h3>{pokemon.name}</h3>
          <h3>Height: {pokemon.height}</h3>
          <h3>Weight: {pokemon.weight}</h3>
          <img src={pokemon.sprites?.front_default} />
        </div>
      )}
    </div>
  );
}
