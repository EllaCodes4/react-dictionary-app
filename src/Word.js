import React from "react";

export default function Word(props) {
  console.log(props.audio);
  return (
    <div className="Word">
      <div className="word mt-4">{props.word}</div>
      {props.pronunciation[0].mw}
    </div>
  );
}
