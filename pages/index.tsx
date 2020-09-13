import Head from "next/head";

import Router from "next/router";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOOD NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello react next.js
      <div>
        <Link href="./partnershp">
          <a>partnership</a>
        </Link>

        <button onClick={() => Router.push("/partnershp")}>partnership</button>
      </div>
    </div>
  );
}
