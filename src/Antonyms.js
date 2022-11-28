import React from "react";

export default function Antonyms(props) {
  return (
    <div className="Antonyms">
      <div className="heading mt-3 mb-2">ANTONYMS</div>
      {props.antonyms.map(function (antonyms, index) {
        return (
          <ul className="text list-unstyled mb-0">
            <li key={index} className="lh-lg">
              {antonyms.map(function (antonym, index) {
                if (index < 4) {
                  return <li key={index}>{antonym}</li>;
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
