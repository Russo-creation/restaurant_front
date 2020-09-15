import React from "react";
import styled, { css } from "styled-components";

interface styleProps {
  inUse: boolean;
}

export const Button = styled.button<styleProps>`
  background: red;
  border: none;
`;
