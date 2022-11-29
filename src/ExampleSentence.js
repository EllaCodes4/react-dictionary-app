import React from "react";

export default function ExampleSentence(props) {
  return (
    <div className="Example sentence text">
      {props.example.dt[1].map(function (vis, index) {
        return (
          <div key={index} className="mb-3">
            {vis[0].t}
          </div>
        );
      })}
    </div>
  );
}
