import styled from "styled-components";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <ScoreBoardWrapper>
      <CurrentScore>Current Score:{currentScore}</CurrentScore>
      <BestScore>Best Score:{bestScore}</BestScore>
    </ScoreBoardWrapper>
  );
};
const ScoreBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 30vw;
  font-size: xx-large;
`;
const Score = styled.div`
  padding: 2rem;
  border-radius: 25%;
  width: 100%;
  text-align: center;
  font: 2rem;
`;
const CurrentScore = styled(Score)`
  background-color: green;
`;
const BestScore = styled(Score)`
  background-color: red;
`;
export default ScoreBoard;
