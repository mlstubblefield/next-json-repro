import { GetStaticProps } from "next";

export default function ErrorPage() {
  return <h1>i am the error page</h1>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
