import Card from "./Card";
import styled from "styled-components";
const CardGrid = ({ pokemons, handleCardClick }) => {
  pokemons.map((pokemon) => (
    <Card
      key={pokemon.id}
      pokemon={pokemon}
      handleCardClick={handleCardClick}
    />
  ));
  return (
    <CardGridWrapper>
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          pokemon={pokemon}
          handleCardClick={handleCardClick}
        />
      ))}
    </CardGridWrapper>
  );
};
const CardGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
`;
export default CardGrid;
