import React from "react";
import Router from "next/router";
import Link from "next/link";
import { i18n, withTranslation } from "../../i18n";
import { isMobile } from "react-device-detect";

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

const SelectTypeForMobile = () => {
  return (
    <Select>
      <option>PL</option>
      <option>EN</option>
      <option>DE</option>
    </Select>
  );
};

const DivTypeForPC = () => {
  return (
    <div>
      <div>PL</div>
      <div>EN</div>
      <div>DE</div>
    </div>
  );
};

const Navigator = ({ t }: Props) => {
  return (
    <Nav>
      <ButtonsContainer>
        <Link href="#">
          <a>
            <Button inUse>{t("NavigatorHome")}</Button>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Button inUse={false}>{t("NavigatorSignIn")}</Button>
          </a>
        </Link>
        <Link href="#">
          <a>
            <Button inUse={false}> {t("NavigatorPartnership")} </Button>
          </a>
        </Link>
      </ButtonsContainer>
      <LangContainer>
        <LangText>LANGUAGE</LangText>
        {isMobile ? <SelectTypeForMobile /> : <DivTypeForPC />}
      </LangContainer>
    </Nav>
  );
};

Navigator.getInitialProps = async () => ({
  namespacesRequired: ["common"]
});
export default withTranslation("common")(Navigator);
