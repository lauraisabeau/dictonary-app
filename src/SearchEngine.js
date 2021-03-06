import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  // documentation: https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus="on"
            placeholder="Type a word ... "
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
