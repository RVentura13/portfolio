import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from '../components/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Rony Ventura</title>
        <meta
          name="description"
          content="Portafolio de proyectos de programación de Rony Ventura"
        />
        <link rel="icon" href="/" />
      </Head>
      <Navbar />
      <Main/>
    </>
  );
};

export default Home;
