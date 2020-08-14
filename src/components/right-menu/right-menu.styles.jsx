import styled from "styled-components";

export const RightMenuContainer = styled.div`
  height: 100%;
  background: #f4f4f4;
  border-right: 1px solid #a8a8a8;
  padding: 70px 0 0 50px;
  button:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const DateButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-bottom: 10px;
  color: #403f3f;
  border-bottom: 1px solid #656464;
  width: 200px;
  cursor: pointer;
  transition: all 0.6s;
  :hover {
    width: 240px;
  }
  @media (max-width: 768px) {
    border: none;
    :hover {
      transform: scale(1.1);
    }
  }
`;
export const DateButtonText = styled.h1`
  padding-left: 8px;
  font-weight: 100;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
