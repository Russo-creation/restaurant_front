import Head from "next/head";
import React, { useState, useEffect } from "react";

import Router from "next/router";
import Link from "next/link";

import Test, { Test2 } from "./Test";

const PartnerShip = () => {
  //hooks
  const [name, setName] = useState("Tomek");
  const [surname, setSurname] = useState("Nowak");

  console.log(name);
  console.log(surname);

  useEffect(() => {
    setName("Łukasz");
  }, [name]);

  useEffect(() => {
    setSurname("Kowalski");
  }, [surname]);

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
      <Test name={name}>
        <div>children</div>
      </Test>
    </div>
  );
};

export default PartnerShip;
