import styled from "styled-components";

export const Main = styled.main``;

export const DescriptionBox = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.02rem;
`;

export const SituationBox = styled.ul`
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 0.94rem;
`;

export const SituationItem = styled.li`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors["-grayscale-200"]};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.25rem;

  font-family: "esamanru OTF";
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 150%; /* 1.875rem */
  letter-spacing: -0.025rem;
`;
