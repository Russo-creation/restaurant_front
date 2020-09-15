import React from "react";
import Router from "next/router";

import { Button, Nav, LangDiv, P, Select } from "./Navigator.css";

const handleOnClick = () => {
  console.log("i am working");
};

const Navigator = () => {
  return (
    <Nav>
      <Button inUse onClick={handleOnClick}>
        HOME
      </Button>
      <Button inUse={false} onClick={() => Router.push("#")}>
        ZALOGUJ
      </Button>
      <Button inUse={false} onClick={() => Router.push("/partnershp")}>
        STREFA PARTNERA
      </Button>
      <LangDiv>
        <P>LANGUAGE</P>
        <Select>
          <option>PL</option>
          <option>EN</option>
          <option>DE</option>
        </Select>
      </LangDiv>
    </Nav>
  );
};

export default Navigator;
