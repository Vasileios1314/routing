import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [pokemons, setPokemos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      // console.log("Data was fetched! This is the response", response.data);
      setPokemos(response.data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect was triggered");
    fetchData();
  }, []);

  return (
    <div>
      <p> This is the home page </p>
      {!pokemons
        ? "Loading..."
        : pokemons.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <Link to={`/about/${pokemon.name}`}>
                  <h3>{pokemon.name}</h3>
                </Link>
              </div>
            );
          })}
      <div></div>
    </div>
  );
}
