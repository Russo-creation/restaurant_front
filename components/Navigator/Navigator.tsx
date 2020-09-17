import React from "react";
import Router from "next/router";
import Link from "next/link";
import { i18n, withTranslation } from "../../i18n";

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

type Props = {
  t: (arg0: string) => React.ReactNode;
};

const Navigator = ({ t }: Props) => {
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
            <Button inUse={false}> {t("h1")} STREFA PARTNERA</Button>
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

Navigator.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});
export default withTranslation("common")(Navigator);
