import Link from "next/link";
export default function Home({hi, something}) {
  
  return <div>
    <h1>hi {hi} {something}.</h1>
    <div>
      {/* <Link href={`/${parseInt(something??0)+1}`} passHref><a>Next!</a></Link> */}
    </div>
  </div>;
}

export const getStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps = async (context) => {
  // throw new Error("boop");
  console.log(context.params)
  return {
     props:{ hi: "there", something: context.params.something, another: "property" }
  }
};
