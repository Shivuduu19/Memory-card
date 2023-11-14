import styled from "styled-components";

const Card = ({ pokemon, handleCardClick }) => {
  // console.log(pokemon.image);
  return (
    <>
      <CardWrapper onClick={handleCardClick}>
        <Image src={pokemon.image} alt={pokemon.name} />
        <Name>{pokemon.name}</Name>
      </CardWrapper>
    </>
  );
};
const CardWrapper = styled.div`
  width: 150px;
`;
const Image = styled.img`
  padding: 0.5rem;
`;
const Name = styled.p`
  padding: 0%.5rem;
`;
export default Card;
