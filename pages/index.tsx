import Head from "next/head";

import Router from "next/router";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchposts } from "../store/actions/postAction";

import { Button } from "./Style.css";

export default function Home() {
  /* const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchposts());
  }, []); */

  const handleOnClick = () => {
    console.log("i am working");
  };

  return (
    <div>
      <Head>
        <title>FOOD NOW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>{posts && posts.map((item) => <h2 key={item}>{item}</h2>)}</div> */}

      <div>
        {/* 
        <Link href="./partnershp">
          <a>partnership</a> 
        </Link>
      */}
        {/* <Button inUse={false} onClick={() => Router.push("#")}>HOME</Button> */}
        <Button inUse={true} onClick={handleOnClick}>
          HOME
        </Button>
        <Button inUse={true} onClick={() => Router.push("/partnershp")}>
          partnership
        </Button>
        <button onClick={() => Router.push("#")}>ZALOGUJ</button>
        <button onClick={() => Router.push("/partnershp")}>
          STREFA PARTNERA
        </button>
        <div>
          LANGUAGE
          <select>
            <option>PL</option>
            <option>EN</option>
            <option>DE</option>
          </select>
        </div>
      </div>
    </div>
  );
}
