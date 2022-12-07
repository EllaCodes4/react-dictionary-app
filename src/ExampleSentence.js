import React from "react";
import "./ExampleSentence.css";

export default function ExampleSentence(props) {
  return (
    <div className="ExampleSentence">
      {props.example.dt[1].map(function (visualIllustration, index) {
        return (
          <div key={index} className="mb-3">
            {visualIllustration[0].t}
          </div>
        );
      })}
    </div>
  );
}
