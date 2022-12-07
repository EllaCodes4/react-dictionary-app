import React from "react";
import "./Word.css";

export default function Word(props) {
  return (
    <div className="Word mt-3">
      <span className="searchWord">{props.word}</span>{" "}
      <div>/{props.pronunciation[0].mw}/</div>
      <div className="translation text-light mt-4">
        EN ESPAÑOL:{" "}
        <span>
          {props.translation.map(function (translations, index) {
            if (index > 2) {
              return (
                <span className="text fst-italic" key={index}>
                  {translations},{" "}
                </span>
              );
            } else {
              return (
                <span className="text fst-italic" key={index}>
                  {translations}{" "}
                </span>
              );
            }
          })}
        </span>
      </div>
    </div>
  );
}
