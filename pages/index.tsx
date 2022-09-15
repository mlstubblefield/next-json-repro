
export default function Home({hi}) {
  return <h1>hi {hi}</h1>;
}

export const getStaticProps = async (context) => {
  // throw new Error("boop");
  return {
     props:{ hi: "there" }
  }
};
