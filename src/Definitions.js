import React from "react";

export default function Definitions(props) {
  return (
    <div className="Definitions">
      <div className="heading mt-5 mb-2">DEFINITION </div>
      {props.definitions.map(function (definitions, index) {
        return (
          <ul className="text list-unstyled">
            <li key={index}>
              {index + 1}. {definitions}
            </li>
          </ul>
        );
      })}
    </div>
  );
}
