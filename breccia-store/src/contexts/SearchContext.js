import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const [screenSearch, setScreenSearch] = useState(false);

  const handleSearch = (search) => {
    setResult(search);
    setScreenSearch(true);
  };

  return (
    <SearchContext.Provider
      value={{ result, setResult, screenSearch, setScreenSearch, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
