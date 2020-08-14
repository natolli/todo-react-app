import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 30px;
  width: 50%;
  *:not(:last-child) {
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const MainText = styled.h1`
  font-size: 5rem;
  color: #091540;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
export const SideText = styled.p`
  font-size: 1.5rem;
  color: #091540;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
