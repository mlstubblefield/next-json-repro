import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home({hi, p}) {
  const [st, setSt] = useState("")
  const router = useRouter()
  useEffect(() => {
    setSt(" once was a man named banana")
    router.push("/papapapapa")
  }, [])

  return <h1>{hi}{st}{p}<Link href="/link" passHref><a>link</a></Link></h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // throw new Error("boop");
  return {
     props:{ hi: "there", p: context.params.param }
  }
};
