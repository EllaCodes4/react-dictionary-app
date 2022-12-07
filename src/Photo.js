import React from "react";
import "./Photo.css";

export default function Photo(props) {
  if (props.photo.length) {
    return (
      <div className="Photo">
        <div className="row mt-4">
          {props.photo.map(function (photo, index) {
            if (index < 4) {
              return (
                <div className="col-6 p-1" key={index}>
                  <img
                    src={photo.src.landscape}
                    className="img-fluid rounded"
                    alt={photo.alt}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <img
        src="images/dictionary.jpg"
        className="img-fluid rounded mt-3"
        alt="dictionary"
      ></img>
    );
  }
}
