import React from "react";

export default function Photo(props) {
  if (props.photo) {
    return (
      <div className="Photo">
        <div className="row mt-4">
          {props.photo.map(function (photo, index) {
            if (index < 4) {
              return (
                <div className="col-6 p-1" key={index}>
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
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
    return null;
  }
}
