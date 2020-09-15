import React from "react";
import Router from "next/router";
import Link from "next/link";

import {
  Button,
  Nav,
  LangContainer,
  LangText,
  Select,
  ButtonsContainer
} from "./Navigator.css";

// const handleOnClick = () => {
//   console.log("i am working");
// };

const Navigator = () => {
  return (
    <Nav>
      <ButtonsContainer>
        <Link href="#">
          <a>
            <Button inUse>HOME</Button>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Button inUse={false}>ZALOGUJ</Button>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Button inUse={false}>STREFA PARTNERA</Button>
          </a>
        </Link>
      </ButtonsContainer>
      <LangContainer>
        <LangText>LANGUAGE</LangText>
        <Select>
          <option>PL</option>
          <option>EN</option>
          <option>DE</option>
        </Select>
      </LangContainer>
    </Nav>
  );
};

export default Navigator;
