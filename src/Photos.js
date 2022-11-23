import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row mt-4">
          {props.photos.map(function (photos, index) {
            if (index < 4) {
              return (
                <div className="col-6 p-1" key={index}>
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt={photos.alt}
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
