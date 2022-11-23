import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <ul className="Antonyms p-1">
        {props.antonyms.map(function (antonyms, index) {
          return <li key={index}>{antonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
