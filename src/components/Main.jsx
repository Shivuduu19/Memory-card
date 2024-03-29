import React from "react";
import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import CardGrid from "./cardsGrid/CardGrid";
import styled from "styled-components";

// main content

const Main = () => {
  const PokemonsAmount = 16;

  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);

  const [loading, setLoading] = useState(true);
  // console.log(typeof pokemons);
  // console.log(typeof clickedPokemons);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shufflePokemons(await fetchPokemons(PokemonsAmount)));
      setLoading(false);
      // console.log(pokemons);
    };
    loadCards();
  }, []);

  // fetching cards

  const fetchPokemons = async (amount) => {
    const pokemons = [];
    for (let i = 1; i <= amount; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokemonUrl, { mode: "cors" });
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }
    // console.log(pokemons);
    // console.log(clickedPokemons);
    return pokemons;
  };

  // shuffling fetched data

  const shufflePokemons = (array) => {
    return [...array].sort(() => Math.random() - 0.4);
  };

  const handleCardClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent;
    gamePlay(pokemonName);
    setPokemons(shufflePokemons(pokemons));
  };
  //  game logic

  const gamePlay = (pokemonName) => {
    // console.log(pokemonName);
    // console.log(clickedPokemons);
    if (clickedPokemons.includes(pokemonName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
      // console.log(pokemonName);
      setClickedPokemons([...clickedPokemons, pokemonName]);
      // console.log(pokemonName);
    }
    // console.log(clickedPokemons);
  };

  // reset game

  const resetGame = () => {
    setCurrentScore(0);
    setClickedPokemons([]);
  };

  return (
    <MainWrapper>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <ScoreBoard
            currentScore={currentScore}
            bestScore={bestScore}
          ></ScoreBoard>
          <CardGrid
            pokemons={pokemons}
            handleCardClick={handleCardClick}
          ></CardGrid>
        </>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 3rem;
`;

export default Main;
