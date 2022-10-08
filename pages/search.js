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

// export async function getServerSideProps(context) {
//   const useDummyData = false;
//   const startIndex = context.query.start || "0";
//   // const data = useDummyData ? MockResponse : useGetData(context.query.term);

//   return {
//     props: {
//       results: data,
//     },
//   };
// }
