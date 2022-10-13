import { useRef, useState, useEffect } from "react";
import { useGetData } from "../pages/api/getData";
export const SearchButton = () => {
  const [data, setData] = useState("");
  const [searchPressed, setSearchPressed] = useState(false);

  //   const data = useGetData("hello world");
  function search(e) {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    // router.push(`/search?term=${term}`);
  }
  return (
    <button type="submit" onClick={setSearchPressed(true)} className="btn">
      Search MFM
    </button>
  );
};
