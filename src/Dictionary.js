import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    setLoaded(true);
  }

  function search() {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <div className="row mt-1">
        <div className="col-8">
          <input
            type="search"
            placeholder="Search word here..."
            className="form-control"
            onChange={updateKeyword}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container p-4">
          {searchForm}
          <Definitions definitions={results.shortdef} />
        </div>
      </div>
    );
  } else {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }
}
