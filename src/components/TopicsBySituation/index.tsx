import * as S from "./styled";
import Header from "../Header";
import TopicCards from "../TopicCards";
import { useTopicsBySituation } from "../../hooks/useTopicsBySituation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Finish from "../SituationFinish";

const TopicsBySituation = () => {
  const { situationId } = useParams();
  const { data } = useTopicsBySituation(situationId || "");
  const [hasViewedAllCards, setHasViewedAllCards] = useState(false);

  const situationName = data?.situationName;

  if (!situationId) {
    console.error("situationId is not defined");
    return null;
  }

  return (
    <>
      <Header title="상황별 토픽 추천" />
      <S.Main>
        <S.SituationBox>
          <S.Situation>#{situationName}</S.Situation>
          <S.ViewAllTopicsButton>
            ${situationName} 토픽 둘러보기 &gt;
          </S.ViewAllTopicsButton>
        </S.SituationBox>
        {hasViewedAllCards ? (
          <Finish topics={data?.topics || []} />
        ) : (
          <TopicCards
            topics={data?.topics || []}
            onHasViewedAllCards={setHasViewedAllCards}
          />
        )}
      </S.Main>
    </>
  );
};

export default TopicsBySituation;
