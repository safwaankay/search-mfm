import Head from "next/head";
import Header from "../components/Header";
import MockResponse from "../data/MockResponse";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import { useGetData } from "./api/getData";

export default function Search({ results }) {
  const router = useRouter();
  const data = useGetData(router.query.term);
  return (
    <div className="bg-white text-black dark:bg-primary-dark">
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Search Results */}

      {data && <SearchResults results={data} />}
    </div>
  );
}

<<<<<<< HEAD
export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? MockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
=======
// export async function getServerSideProps(context) {
//   const useDummyData = false;
//   const startIndex = context.query.start || "0";
//   // const data = useDummyData ? MockResponse : useGetData(context.query.term);
>>>>>>> 4bb55d471599d5dba2a8132982ed8a7fb8aa59b7

//   return {
//     props: {
//       results: data,
//     },
//   };
// }
