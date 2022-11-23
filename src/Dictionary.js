import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import WordPronunciation from "./WordPronunciation";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState({});
  const [photos, setPhotos] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    setLoaded(true);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001dcdedaeb55b5462c9236bf470837114d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <WordPronunciation results={results} />
          <Photos photos={photos} />
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001dcdedaeb55b5462c9236bf470837114d";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
}
