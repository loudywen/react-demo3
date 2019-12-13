import React from "react";
import { connect } from "react-redux";
import PhotoItem from "../photoitem/photoItem.component";

const PhotoContainer = ({ currentPhoto }) => {
  return (
    <div className="row">
      {currentPhoto &&
        currentPhoto
          .filter((photo, index) => index < 10)
          .map((photo, i) => {
            console.log(i);
            return <PhotoItem key={i} photo={photo} />;
          })}
    </div>
  );
};

const mapStateToProps = state => ({
  currentPhoto: state.photos.currentPhoto
});

export default connect(mapStateToProps)(PhotoContainer);
