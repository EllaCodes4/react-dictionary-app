import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.definitions.map(function (definitions, index) {
        return (
          <div className="text" key={index}>
            {index + 1}. {definitions.definition}
          </div>
        );
      })}

      <div className="row">
        <div className="col-6">
          <div className="heading mt-3 mb-2">SYNONYMS</div>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </div>
    </div>
  );
}
