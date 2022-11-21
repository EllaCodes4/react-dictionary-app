import React from "react";
import "./SynonymList.css";

export default function SynonymList(props) {
  return <li className="SynonymList">{props.synonyms}</li>;
}
