import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";
import Photo from "./Photo";
import Word from "./Word";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Sentence from "./Sentence";

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
      <div className="row mt-3">
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
          <Word word={results.hwi.hw} />
          <Photo />
          <Definitions definitions={results.shortdef} partOfSpeech={results.fl}/>
          <div className="row">
            <div className="col-6">
              <Synonyms synonyms={results.meta.syns} />
            </div>
            <div className="col-6">
              <Antonyms antonyms={results.meta.ants} />
            </div>
          </div>
          <Sentence sentence={results.def} />
        </div>
      </div>
    );
  } else {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }
}
