import styled from "styled-components";

const MainPage = () => {
  return (
    <MainPageLayout>
      <div className={"Score"}></div>
      <div className={"CurrentPlayer"}></div>
      <div className={"Play"}></div>
      <div className={"History"}></div>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 25vh);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "Score Score Score CurrentPlayer"
    "Play Play Play History"
    "Play Play Play History"
    "Play Play Play History";

  div.Score {
    grid-area: Score;
    background-color: #fcb4b4;
  }
  div.CurrentPlayer {
    grid-area: CurrentPlayer;
    background-color: #badff5;
  }
  div.Play {
    grid-area: Play;
    background-color: #bad8ba;
  }
  div.History {
    grid-area: History;
    background-color: #a4a5a7;
  }
`;
export default MainPage;
