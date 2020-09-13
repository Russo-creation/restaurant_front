import Head from "next/head";
import React from "react";

import Router from "next/router";
import Link from "next/link";

const PartnerShip = () => {
  return (
    <div>
      <Head>
        <title>PARTNERSHIP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      I am from partnership
      <div>
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
    </div>
  );
};

export default PartnerShip;
