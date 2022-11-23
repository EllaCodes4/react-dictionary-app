import React from "react";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      {props.phonetics.text}
      <a
        href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
        className="translation text-light ps-2 text-decoration-none"
      >
        🔊
      </a>
    </span>
  );
}
