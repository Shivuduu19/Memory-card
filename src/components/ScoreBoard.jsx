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
`;
const Score = styled.div`
  padding: 2rem;
  width: 40%;
  border-radius: 25%;
  font: 2rem;
`;
const CurrentScore = styled(Score)`
  background-color: green;
`;
const BestScore = styled(Score)`
  background-color: red;
`;
export default ScoreBoard;
