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
    <div className="Dictionary rounded">
      <div className="container p-4">
        {searchForm}
        <img
          className="img-fluid rounded mt-3"
          src="https://cdn.vox-cdn.com/thumbor/D-k171UxzsdFtISjXDHm6kpPW0Y=/0x0:1018x629/920x613/filters:focal(428x234:590x396):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/50822579/5510506796_dff8c07b64_b.0.0.jpg"
          alt="dictionary"
        ></img>
        <div className="word">
          DICTIONARY (noun)
          <a href="/">Translate</a>
        </div>
        <ul className="definition">
          <li>Student-Friendly Definition here</li>
          <li>Helpful Synonyms here</li>
          <li>Sentence here: </li>
        </ul>
      </div>
    </div>
  );
}
