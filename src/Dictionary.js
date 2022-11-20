import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [dictionaryData, setDictionaryData] = useState({});

  function handleResponse(response) {
    console.log(response.data[0]);

    setDictionaryData({
      loaded: true,
      word: response.data[0].hwi.hw,
      partOfSpeech: response.data[0].fl,
      synonyms: response.data[0].meta.syns[0],
      antonyms: response.data[0].meta.ants[0],
      definition: response.data[0].shortdef[0],
    });
  }

  function search() {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
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

  if (dictionaryData.loaded) {
    return (
      <div className="Dictionary">
        <div className="container p-4">
          {searchForm}
          <div className="word mt-4">
            {dictionaryData.word}{" "}
            <span className="partOfSpeech">
              ({dictionaryData.partOfSpeech})
            </span>
            <small>
              <a href="/" className="translation text-light ps-2">
                Translate
              </a>
            </small>
          </div>
          <div className="pronunciaton">/wərd/ </div>
          <img
            className="img-fluid rounded mt-3"
            src="https://cdn.vox-cdn.com/thumbor/D-k171UxzsdFtISjXDHm6kpPW0Y=/0x0:1018x629/920x613/filters:focal(428x234:590x396):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50822579/5510506796_dff8c07b64_b.0.0.jpg"
            alt="dictionary"
          ></img>
          <ul className="wordDetails mt-5">
            <li className="heading text-uppercase mb-2">Definitions</li>
            <li className="definition mb-4">{dictionaryData.definition}</li>
          </ul>

          <div className="row">
            <div className="col-6">
              <ul className="wordDetails mt-3">
                <li className="heading text-uppercase mb-2">Synonyms</li>
                <li className="text mb-4">{dictionaryData.synonyms}</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="wordDetails mt-3">
                <li className="heading text-uppercase mb-2">Antonyms</li>
                <li className="text mb-4">{dictionaryData.antonyms}</li>
              </ul>
            </div>
          </div>

          <ul className="wordDetails mt-3">
            <li className="heading text-uppercase mb-2">Sentence</li>
            <li className="sentence mb-4">{dictionaryData.sentence}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
