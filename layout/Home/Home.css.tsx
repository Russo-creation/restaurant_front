import React from "react";
import styled, { css } from "styled-components";
import bcg from "../../images/bcg.png";

interface styleProps {
  inUse: boolean;
}

export const Button = styled.button<styleProps>`
  background: red;
  border: none;
`;

export const Content = styled.div`
  background-image: url(${bcg});
`;
