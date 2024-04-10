import Head from "next/head";

import Home from "@/components/views/home/Home";

const home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Home />
    </>
  );
};

export default home;
