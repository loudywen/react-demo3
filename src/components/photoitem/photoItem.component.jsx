import React from "react";

const PhotoItem = ({ photo: { title, url, thumbnailUrl } }) => {
  return (
    <div className="col-sm-4 d-flex align-items-stretch py-4 ">
      <div className="card w-90">
        <img
          src={url}
          className="card-img-top embed-responsive-item"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{url}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
