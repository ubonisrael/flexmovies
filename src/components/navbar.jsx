import React, { useState } from "react";

import styles from "@/styles/Navbar.module.css";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [query, setQuery] = useState('')

  const router = useRouter()

  const handleSearch = e => {
    console.log(query);
    e.preventDefault()
    if (!query) {
      return
    } else {
      router.push(`/search/${query.trim()}`)
      // router.push({
      //   pathname: `/search/${query.trim()}`,
      //   query: {search: query}
      // })
      setQuery('')
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.title}>flexmovies</h1>
        <div className={styles.searchcontainer}>
          <form onSubmit={handleSearch}>
          <input
            id="search"
            className={styles.search}
            type="text"
            placeholder="Search for movies, tv series....."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button id="search-btn" type="submit" className={styles.searchbtn}>
            Search
          </button>
          </form>
        </div>
      </nav>
    </>
  );
};
