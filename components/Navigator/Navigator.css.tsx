import React from "react";
import styled, { css } from "styled-components";

interface styleProps {
  inUse: boolean;
}

export const Nav = styled.nav`
  background: blue;
  border: none;
  max-width: 1024px;
  height: 100px;
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: white;
  letter-spacing: 1px;
`;

export const ButtonsContainer = styled.div`
  flex-grow: 2;
`;

export const Button = styled.div<styleProps>`
  background: transparent;
  border: none;
  display: inline-block;
  line-height: 100px;
  padding: 0 40px;
`;

export const LangContainer = styled.div`
  max-width: 73px;
  flex-grow: 1;
  margin-top: -5px;
`;

export const LangText = styled.div`
  background: transparent;
  border: none;
  display: inline-block;
  width: 100%;
  font-size: 10px;
  text-align: center;
  font-weight: 900;
`;
export const Select = styled.select`
  background-color: transparent;
  color: white;
  width: 100%;
  padding: 0;
  height: 34px;
  margin: 0;
  border: 1px solid RGBA(255, 255, 255, 0.5);
  text-align: center;
  padding-left: 13px;
  font-weight: bold;
  border-radius: 0;
  background-image: linear-gradient(45deg, transparent 50%, #fff 50%),
    linear-gradient(135deg, #fff 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  appearance: none;

  option {
    background-color: transparent;
    color: black;
  }

  &:focus {
    outline: none;
  }
`;
