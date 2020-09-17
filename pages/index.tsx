import React from "react";
import Head from "next/head";

import { withTranslation } from "../i18n";

import Navigator from "../components/Navigator";

import Home from "../layout/Home";

type Props = {
  t: (arg0: string) => React.ReactNode;
};

const HomePage = ({ t }: Props) => {
  //other components
  const handleOnClick = () => {
    console.log("i am working");
  };

  return (
    <div>
      <Head>
        <title>FOOD NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navigator />

        <Home />
      </body>
    </div>
  );
};

HomePage.getInitialProps = async () => ({
  namespacesRequired: ["home", "common"]
});

export default withTranslation("home")(HomePage);
