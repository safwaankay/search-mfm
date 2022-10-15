import { set } from "nprogress";
import { useState, useEffect } from "react";

export function useGetData(terms) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://limitless-shore-40175.herokuapp.com/api/v1/videoData/${terms}`,
      {
        headers: {
          accepts: "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, [terms]);
  console.log(data);
  return data;
}
