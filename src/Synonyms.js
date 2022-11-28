import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <div className="heading mt-3 mb-2">SYNONYMS</div>
      {props.synonyms.map(function (synonyms, index) {
        return (
          <ul className="text list-unstyled mb-0">
            <li key={index} className="lh-lg">
              {synonyms.map(function (synonym, index) {
                if (index < 3) {
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
}
