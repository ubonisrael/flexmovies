import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Searchbar.module.scss";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSearch = (e) => {
    console.log(query);
    e.preventDefault();
    if (!query) {
      return;
    } else {
      router.push({
        pathname: `/search/${query.trim()}`,
        query: { search: query, page: "1" },
      });
      setQuery("");
    }
  };

  return (
    <div className={styles.searchcontainer}>
      <form onSubmit={handleSearch}>
        <label htmlFor="search" className={styles.search}>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search for movies, tv series....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        </label>
        <button id="search-btn" type="submit" className={styles.searchbtn}>
          Search
        </button>
      </form>
    </div>
  );
};
