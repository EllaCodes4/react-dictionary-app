import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="heading mt-5 mb-2">DEFINITION</div>*
      {props.meanings.partOfSpeech}
      {props.meanings.definitions.map(function (definitions, index) {
        if (index < 2) {
          return (
            <div className="text" key={index}>
              {index + 1}. {definitions.definition}
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="row">
        <div className="col-6">
          <div className="heading mt-3 mb-2">SYNONYMS</div>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>

        <div className="col-6">
          <div className="heading mt-3 mb-2">ANTONYMS</div>
          <Antonyms antonyms={props.meanings.antonyms} />
        </div>
      </div>
    </div>
  );
}
