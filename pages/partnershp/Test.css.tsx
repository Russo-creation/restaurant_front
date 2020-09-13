import React from "react";
import styled, { css } from "styled-components";

interface styleProps {
  primary: boolean;
}

export const Button: React.FC<styleProps> = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${({ primary }) =>
    primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const SecondButton: React.FC<styleProps> = styled(Button)`
  background: green;
`;

export const Container = styled.div`
  text-align: center;
`;
