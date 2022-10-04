import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

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
    </>
  );
};

export default Home;
