import React from "react";
import styled, { css } from "styled-components";

interface styleProps {
  inUse: boolean;
  onClick: () => void;
}

export const Button: React.FC<styleProps> = styled.div`
  background: red;
  border: none;
  display: inline-block;
  line-height: 100px;
  padding: 0 40px;
`;

export const Nav: React.FC = styled.nav`
  background: blue;
  border: none;
  max-width: 1024px;
  height: 100px;
  margin: 0 auto;
`;

export const LangDiv: React.FC = styled.div`
  display: inline-block;
`;

export const P: React.FC = styled.p`
  background: red;
  border: none;
  display: inline-block;
  line-height: 100px;
  padding: 0 40px;
`;
export const Select: React.FC = styled.select`
  background: red;
  border: none;
  padding: 0 40px;
  height: 100px;
  margin: 0;
  display: inline-block;
`;
