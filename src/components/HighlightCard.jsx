import React from "react";

export default function Card({ title, price, description, image }) {
  return (
    <div className="card ms-2 me-2">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body ">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h6 className="price">{price}</h6>
        </div>
        <p className="card-text">{description}</p>
      </div>

      <div className="card-body sharp-bottom">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="card-link"
        ></a>
      </div>
    </div>
  );
}
