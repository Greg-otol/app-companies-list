import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #5e5b5b;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px;

  @media (max-width: 700px) {
    height: 105px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #3f3f3f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 1px 1px 5px 2px #f0f0f0;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  background-color: #3f3f3f;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 1px 1px 5px 2px #f0f0f0;
  }
`;
