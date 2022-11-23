import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.results.meanings[0].definitions);

  return (
    <div className="Results">
      <div className="heading mt-5 mb-2">DEFINITION</div>
      {props.results.meanings.map(function (meanings, index) {
        return (
          <div className="text" key={index}>
            <Meanings meanings={meanings} />
          </div>
        );
      })}
    </div>
  );
}
