import PaginationButtons from "./PaginationButtons";
import Image from "next/image";

export default function SearchResults({ results }) {
  console.log("results:", results);
  return (
    <div className="mx-auto w-full min-h-screen px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-open-sans dark:bg-primary-dark  dark:text-white">
<<<<<<< HEAD
      <p className="text-gray-600 dark:text-gray-400 text-md mb-3 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div
            key={result.link}
            className="max-w-xl py-4 px-3 text-xs mb-4 shadow ring-gray-200 dark:ring-[#303134] dark:ring-1 dark:shadow-3xl ring-2 sm:ring-0 sm:text-base sm:shadow-none rounded-lg"
          >
            <div className="group">

              {/* FIXME Added image component above results. Currently displaying Dummy Data in 'data' folder. Currently broken */}
              <Image
              src={`https://img.youtube.com/vi/${result.videoId}/0.jpg`}//if u want it to work plug this in -> Poc5H6aVTlw
              width={425}
              height={310}
              alt="shipping"
              />
              <a href={result.link} className="text-sml line-clamp-1">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-xl text-blue-800 dark:text-blue-400 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
=======
      {results &&
        results.map((result) => {
          return (
            <div
              key={result[0]}
              className="max-w-xl py-4 px-3 text-xs mb-4 shadow ring-gray-200 dark:ring-[#303134] dark:ring-1 dark:shadow-3xl ring-2 sm:ring-0 sm:text-base sm:shadow-none rounded-lg"
            >
              <div className="group">
                <a href={result[0]} className="text-sml line-clamp-1">
                  {result[0]}
                </a>
                <a href={result.link}>
                  <p className="text-blue-800 dark:text-blue-400 font-medium group-hover:underline">
                    {result[1]}
                  </p>
                </a>
              </div>
>>>>>>> 4bb55d471599d5dba2a8132982ed8a7fb8aa59b7
            </div>
          );
        })}
      <PaginationButtons />
    </div>
  );
}
