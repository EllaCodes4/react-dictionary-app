import React from "react";
import ExampleSentence from "./ExampleSentence";
import "./Sentence.css";

export default function Sentence(props) {
  return (
    <div className="Sentence">
      <div className="heading mt-5">EXAMPLE SENTENCE</div>
      {props.sentence.map(function (defintion, index) {
        return (
          <div key={index}>
            {defintion.sseq.map(function (senseSequence, index) {
              return (
                <div key={index}>
                  {senseSequence.map(function (sense, index) {
                    return (
                      <div key={index}>
                        <ExampleSentence example={sense[1]} />
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
