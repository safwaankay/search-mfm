import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  console.log("results:", results);
  return (
    <div className="mx-auto w-full min-h-screen px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-open-sans dark:bg-primary-dark  dark:text-white">
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
            </div>
          );
        })}
      <PaginationButtons />
    </div>
  );
}
