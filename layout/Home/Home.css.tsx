import React from "react";
import styled, { css } from "styled-components";

const bcg = require("../../images/Home/mainBackground.png");

interface styleProps {
  inUse: boolean;
}

export const Button = styled.button<styleProps>`
  background: red;
  border: none;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  background: url("${bcg}");
  background-position: center;
  background-size: cover;
`;
