import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <div className="heading mt-5 mb-2">DEFINITIONS</div>
      {props.definitions.map(function (definitions, index) {
        return (
          <ul className="text list-unstyled">
            <li key={index}>
              {index + 1}.{" "}
              <small className="fw-lighter fst-italic pe-1">
                ({props.partOfSpeech})
              </small>{" "}
              {definitions}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
