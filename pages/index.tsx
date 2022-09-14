import { GetServerSideProps } from "next";

export default function Home() {
  return <h1>sdfsdf</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  throw new Error("boop");
};
