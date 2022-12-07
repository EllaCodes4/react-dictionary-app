import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <div className="heading mt-5 mb-2">SYNONYMS</div>
        {props.synonyms.map(function (synonyms, index) {
          return (
            <ul className="text list-unstyled mb-0">
              <li key={index} className="lh-lg">
                {synonyms.map(function (synonym, index) {
                  if (index < 2) {
                    return <li key={index}>{synonym}</li>;
                  } else {
                    return null;
                  }
                })}
              </li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
