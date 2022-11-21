import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import SynonymList from "./SynonymList";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [dictionaryData, setDictionaryData] = useState({});

  function handleResponse(response) {
    console.log(response.data[0]);

    setDictionaryData({
      loaded: true,
      word: response.data[0].hwi.hw,
      partOfSpeech: response.data[0].fl,
      synonyms: response.data[0].meta.syns,
      antonyms: response.data[0].meta.ants,
      definition: response.data[0].shortdef,
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

          <div className="heading mt-5 mb-2">
            DEFINITION
            {dictionaryData.definition.map(function (definitions, index) {
              return (
                <div className="text" key={index}>
                  {index + 1}. {definitions}
                </div>
              );
            })}
          </div>

          <div className="row">
            <div className="col-6">
              <div className="heading mt-3 mb-2">SYNONYMS</div>
              {dictionaryData.synonyms.map(function (synonyms, index) {
                return (
                  <ul className="text p-0 m-0" key={index}>
                    <SynonymList synonyms={synonyms} />
                  </ul>
                );
              })}
            </div>
            <div className="col-6">
              <div className="heading mt-3 mb-2">ANTONYMS</div>
              {dictionaryData.antonyms.map(function (antonyms, index) {
                return (
                  <ul className="p-0 m-0 text" key={index}>
                    <li>{antonyms}</li>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="heading mt-3 mb-2">
            SENTENCE
            <p className="sentence mb-4">{dictionaryData.sentence}</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bdac9283-8578-4642-99c0-7e27017b0568";
    let apiUrl = `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${keyword}?key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
