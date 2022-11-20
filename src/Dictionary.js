import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let searchForm = (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Search word here..."
            className="form-control"
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
    </form>
  );

  return (
    <div className="Dictionary">
      <div className="container p-4">
        {searchForm}
        <div className="word mt-4">
          word <span className="partOfSpeech">(noun)</span>
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
          <li className="definition mb-4">Definition here</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <ul className="wordDetails mt-3">
              <li className="heading text-uppercase mb-2">Synonyms</li>
              <li className="text mb-4">Synonyms here</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="wordDetails mt-3">
              <li className="heading text-uppercase mb-2">Antonyms</li>
              <li className="text mb-4">Antonyms here</li>
            </ul>
          </div>
        </div>

        <ul className="wordDetails mt-3">
          <li className="heading text-uppercase mb-2">Sentence</li>
          <li className="sentence mb-4">Sentence here</li>
        </ul>
      </div>
    </div>
  );
}
