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
  width: 250px;
  height: 250px;
  border-radius: 40px;
  background-color: #cfd4d8;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: larger;
  font-weight: 600;
  &:hover {
    background-color: #606162;
  }
`;
const Image = styled.img`
  /* padding: 0.5rem; */
`;
const Name = styled.p`
  /* padding: 0%.5rem; */
`;
export default Card;
