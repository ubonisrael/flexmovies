import { HomePage } from "@/components/home-page";
import Head from "next/head";

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title> Flexmovies </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage data={data} />
    </>
  );
}