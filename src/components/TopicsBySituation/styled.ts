import styled from "styled-components";
import FONT from "../../styles/font";
import { StackOrder } from "../TopicCards/type";

export const Main = styled.main``;

export const SituationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2.75rem;
`;

export const Situation = styled.div`
  ${FONT.headline28}
`;

export const ViewAllTopicsButton = styled.button`
  ${FONT.caption14}
  padding: 0.25rem 0.75rem;
  color: white;
  background-color: ${(props) => props.theme.colors["-grayscale-800"]};
  border-radius: 4.56rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
`;

export const CardStackContainer = styled.div`
  padding: 0 1.5rem;
  margin-top: 1.19rem;

  .stacked-card-swiper {
    .swiper-slide {
      transition: all 0.3s ease;
      opacity: 0;

      &.swiper-slide-active,
      &.swiper-slide-next,
      &.swiper-slide-next + .swiper-slide {
        opacity: 1;
      }
    }
  }
`;

export const CardStack = styled.div`
  position: relative;
  width: 100%;
  height: 29.86rem;
`;

export const Card = styled.div<{ order: number }>`
  position: absolute;
  width: 100%;
  height: 27.3rem;
  background: ${(props) => props.theme.colors["--card-color-blue"]};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styleByOrder: Record<
  StackOrder,
  { bottom: string; opacity: number; scaleX: number }
> = {
  1: {
    bottom: "0rem",
    opacity: 1,
    scaleX: 1,
  },
  2: {
    bottom: "1.38rem",
    opacity: 0.4,
    scaleX: 0.94,
  },
  3: {
    bottom: "2.63rem",
    opacity: 0.2,
    scaleX: 0.88,
  },
};

export const StackedCard = styled(Card)<{ order: 1 | 2 | 3 }>`
  position: absolute;
  bottom: ${({ order }) => styleByOrder[order].bottom};
  // TODO: opacity값을 쓸 게 아니라 opacity가 적용된 색상값을 return해야 함.
  opacity: ${({ order }) => styleByOrder[order].opacity};
  transform: scaleX(${({ order }) => styleByOrder[order].scaleX});
  z-index: ${({ order }) => 5 - order};
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ProgressText = styled.span`
  ${FONT.body16}
  opacity: 0.5;
`;

export const Icon = styled.img``;
