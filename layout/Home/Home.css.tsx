import React from "react";
import styled, { css } from "styled-components";

interface styleProps {
  inUse: boolean;
  onClick: () => void;
}

export const Button: React.FC<styleProps> = styled.button`
  background: red;
  border: none;
`;
