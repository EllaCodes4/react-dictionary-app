import React from "react";
import ExampleSentence from "./ExampleSentence";

export default function Sentence(props) {
  return (
    <div className="Sentence">
      <div className="heading mt-5">EXAMPLE SENTENCE</div>
      {props.sentence.map(function (def, index) {
        return (
          <div key={index}>
            {def.sseq.map(function (sseq, index) {
              return (
                <div key={index}>
                  {sseq.map(function (sseq, index) {
                    return (
                      <div key={index}>
                        <ExampleSentence example={sseq[1]} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
