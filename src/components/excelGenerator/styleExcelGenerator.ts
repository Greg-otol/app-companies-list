import styled from "styled-components";

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
