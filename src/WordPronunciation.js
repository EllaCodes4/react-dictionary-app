import React from "react";
import Phonetics from "./Phonetics";

export default function WordPronunciation(props) {
  return (
    <div className="WordPronunciation mt-4">
      <span className="word">{props.results.word} </span>
      {props.results.phonetics.map(function (phonetics, index) {
        if (index < 1) {
          return (
            <span key={index}>
              <Phonetics phonetics={phonetics} />
            </span>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
