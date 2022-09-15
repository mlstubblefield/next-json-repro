import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Home({hi}) {
  const [st, setSt] = useState("")

  useEffect(() => {
    setSt(" once was a man named banana")
  }, [])

  return <h1>{hi}{st}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // throw new Error("boop");
  return {
     props:{ hi: "there" }
  }
};
