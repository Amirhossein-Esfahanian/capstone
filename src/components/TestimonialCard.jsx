import React from "react";

export default function TestimonialCard({ rate, title, description, image }) {
  const percent = 20 * rate;
  const progress = `${percent}%`;
  return (
    <div className="card m-2 glass">
      <div className="card-body">
        <h6 className="card-title text-center rating">Rate</h6>
        <div className="progress mb-4">
          <div
            className={`progress-bar ${rate < 3 ? "bg-danger" : "bg-success"}`}
            role="progressbar"
            // style="width: 25%"
            style={{ width: progress }}
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex">
          <img src={image} width="80px" className=" avatar" alt="avatar" />
          <h6>{title}</h6>
        </div>
        {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
