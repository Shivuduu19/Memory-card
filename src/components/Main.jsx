import React from "react";
import { useEffect, useState } from "react";
import ScoreBoard from "./ScoreBoard";
import CardGrid from "./cardsGrid/CardGrid";
import styled from "styled-components";

const Main = () => {
  const PokemonsAmount = 16;
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  // console.log(typeof pokemons);
  // console.log(typeof clickedPokemons);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shufflePokemons(await fetchPokemons(PokemonsAmount)));
      // console.log(pokemons);
    };
    loadCards();
  }, []);
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
  const shufflePokemons = (array) => {
    return [...array].sort(() => Math.random() - 0.4);
  };
  const handleCardClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent;
    gamePlay(pokemonName);
    setPokemons(shufflePokemons(pokemons));
  };
  const gamePlay = (pokemonName) => {
    // console.log(pokemonName);
    // console.log(clickedPokemons);
    if (clickedPokemons.includes(pokemonName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
      console.log(pokemonName);
      setClickedPokemons([...clickedPokemons, pokemonName]);
      console.log(pokemonName);
    }
    console.log(clickedPokemons);
  };
  const resetGame = () => {
    setCurrentScore(0);
    setClickedPokemons([]);
  };
  return (
    <MainWrapper>
      <ScoreBoard
        currentScore={currentScore}
        bestScore={bestScore}
      ></ScoreBoard>
      <CardGrid
        pokemons={pokemons}
        handleCardClick={handleCardClick}
      ></CardGrid>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 3rem;
`;

export default Main;
